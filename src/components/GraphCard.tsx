import { formattedQuery } from '../types'
import PlayerIcon from './PlayerIcon'

const getMaxValue = (data: formattedQuery) => {
  let max = 0
  Object.values(data).forEach((value) => {
    if (value > max) max = value
  })
  return max
}

const GraphCard: React.FC<{
  data: formattedQuery
  label: string
  suffix: string
  multiply?: number
  toFixed?: number
}> = ({ data, label, suffix, multiply, toFixed }) => {
  const maxValue = getMaxValue(data)

  return (
    <>
      <div className='card w-full bg-base-200 shadow-xl p-4'>
        <p className='font-bold text-lg text-primary pb-2'>{label}</p>
        <div className='flex flex-row w-full'>
          <div className='flex flex-col justify-between'>
            {Object.entries(data).map(([key, value]) => {
              return (
                <div className='' key={key}>
                  <p className={`w-1/5 ${value === maxValue ? 'font-bold text-accent' : null}`}>
                    {key}
                  </p>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col justify-between'>
            {Object.entries(data).map(([key, _]) => {
              return (
                <div className='' key={key}>
                  <div className='w-5 h-5 mr-3 ml-3'>
                    <PlayerIcon player={key} />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='w-full flex flex-col justify-between'>
            {Object.entries(data).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className='relative w-full h-5 bg-base-100 rounded tooltip'
                  data-tip={`${parseFloat(
                    (value * (multiply ?? 1)).toFixed(toFixed ?? 0)
                  ).toLocaleString('EN-US')} ${suffix}`}>
                  <div
                    className='absolute top-0 h-5 bg-secondary rounded'
                    style={{
                      width: `${(value / maxValue) * 100}%`,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default GraphCard
