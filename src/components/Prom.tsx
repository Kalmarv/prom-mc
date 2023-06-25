import { PrometheusDriver } from 'prometheus-query'
import { useEffect, useState } from 'react'

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
      return series
    })
    .catch(console.error)
}

const Prom = () => {
  const [queryData, setQueryData] = useState()

  useEffect(() => {
    const getData = async () => {
      const res: any = await getQuery('sum(blocks_mined) by (player)')
      setQueryData(res)
    }

    getData()
  }, [])

  return (
    <>
      <p className='font-bold'>{JSON.stringify(queryData)}</p>
    </>
  )
}

export default Prom
