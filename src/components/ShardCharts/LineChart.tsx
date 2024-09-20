import { ResponsiveLine } from '@nivo/line'

interface ILineChartData {
    data: Array<[]>
}


function LineChart({ data }: ILineChartData) {
    return (<section className='w-full h-96 bg-white p-4'>
         <div className='flex justify-between items-center px-3 -mb-14'>
            <p className='font-bold'>Total Revenu</p>
            <select name="" id="" className='w-36 rounded-lg border p-2'>
              <option value="">Weekly</option>
            </select>
          </div>
        <ResponsiveLine
            data={data}
            margin={{ top: 100, right: 120, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="basis"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            enableGridY={false}
            pointSize={10}
            pointColor={{ from: 'color', modifiers: [] }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'top-right',
                    direction: 'row',
                    justify: false,
                    translateX: -100,
                    translateY: -68,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 75,
                    itemHeight: 10,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </section>)
}

export default LineChart