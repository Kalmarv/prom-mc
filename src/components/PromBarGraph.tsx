import { PrometheusDriver } from 'prometheus-query'
import { useEffect, useState } from 'react'
import { formattedQuery } from '../types'
import GraphCard from './GraphCard'

const promEndpoint = import.meta.env.VITE_PROM_ENDPOINT

const promDriver = new PrometheusDriver({
  endpoint: promEndpoint,
  baseURL: '/api/v1/', // default value
})

const getQuery = async (query: string) => {
  const q = query
  return promDriver
    .instantQuery(q)
    .then((res) => {
      const series = res.result
      const formattedData = series
        .map((s) => {
          return {
            metric: s.metric.labels.player,
            value: s.value.value,
          }
        })
        .reduce((obj: any, item) => {
          obj[item.metric] = item.value
          return obj
        }, {})
      return formattedData as formattedQuery
    })
    .catch(console.error)
}

const PromBarGraph: React.FC<{
  query: string
  label: string
  suffix: string
  multiply?: number
  toFixed?: number
}> = ({ query, label, suffix, multiply, toFixed }) => {
  const [queryData, setQueryData] = useState()

  useEffect(() => {
    const getData = async () => {
      const res: any = await getQuery(query)
      setQueryData(res)
    }

    getData()
  }, [query])

  return queryData ? (
    <>
      <div className='p-4'>
        <GraphCard
          data={queryData}
          label={label}
          suffix={suffix}
          multiply={multiply ?? 1}
          toFixed={toFixed ?? 0}
        />
      </div>
    </>
  ) : null
}

export default PromBarGraph
