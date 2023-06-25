import { formattedQuery } from '../types'

const getMaxValue = (data: formattedQuery) => {
  let max = 0
  Object.values(data).forEach((value) => {
    if (value > max) max = value
  })
  return max
}

const SVGGraph: React.FC<{
  data: formattedQuery
  label: string
  suffix: string
  multiply?: number
}> = ({ data, label, suffix, multiply }) => {
  const maxValue = getMaxValue(data)

  return (
    <>
      <div className='card w-full bg-primary shadow-xl p-2 max-w-2xl'>
        <p className='font-bold text-lg'>{label}</p>
        <div className='flex flex-col w-full'>
          {Object.entries(data).map(([key, value]) => {
            return (
              <div className='flex flex-row w-full' key={key}>
                <p className='w-1/4'>{key}</p>
                <div className='w-3/4'>
                  <div
                    className='relative w-full h-4 bg-gray-200 rounded tooltip'
                    data-tip={`${(value * (multiply ?? 1)).toLocaleString('EN-US')} ${suffix}`}>
                    <div
                      className='absolute top-0 h-4 bg-secondary rounded'
                      style={{
                        width: `${(value / maxValue) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SVGGraph
