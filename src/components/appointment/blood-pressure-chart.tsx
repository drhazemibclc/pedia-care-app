'use client'

import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface BloodPressureChartProps {
	average: string
	data: {
		label: string
		systolic: number
		diastolic: number
	}[]
}

const BloodPressureChart = ({ data, average }: BloodPressureChartProps) => {
	const lastData = data[data.length - 1]

	return (
		<Card className="col-span-2 shadow-none">
			<CardHeader>
				<CardTitle>Blood Pressure</CardTitle>
			</CardHeader>

			<CardContent>
				<div className="mb-4 flex items-center justify-between">
					<div>
						<p className="font-semibold text-lg xl:text-xl">
							{lastData?.systolic || 0}/ {lastData?.diastolic || 0} mg/dL
						</p>
						<p className="text-muted-foreground text-sm">Recent Reading</p>
					</div>

					<div>
						<p className="font-semibold text-lg xl:text-xl">{average}</p>
						<p className="text-muted-foreground text-sm">7 Days Average</p>
					</div>

					<Button
						size={'sm'}
						variant={'outline'}
					>
						See Insight
					</Button>
				</div>

				<ResponsiveContainer
					height={400}
					width="100%"
				>
					<BarChart data={data}>
						<CartesianGrid
							stroke="#ddd"
							strokeDasharray="3 3"
							vertical={false}
						/>
						<XAxis
							axisLine={false}
							dataKey="label"
							tickLine={false}
						/>
						<YAxis
							axisLine={false}
							tick={{ fill: '#9ca3af' }}
							tickLine={false}
						/>

						<Tooltip contentStyle={{ borderRadius: '10px', borderColor: '#fff' }} />

						<Legend
							align="left"
							verticalAlign="top"
							wrapperStyle={{
								paddingTop: '20px',
								paddingBottom: '40px',
								textTransform: 'capitalize',
							}}
						/>

						<Bar
							dataKey="systolic"
							fill="#000000"
							legendType="circle"
							radius={[10, 10, 0, 0]}
						/>
						<Bar
							dataKey="diastolic"
							fill="#2563eb"
							legendType="circle"
							radius={[10, 10, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}

export default BloodPressureChart
