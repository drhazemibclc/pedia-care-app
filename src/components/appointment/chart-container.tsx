import { getVitalSignData } from '@/utils/services/medical'

import BloodPressureChart from './blood-pressure-chart'
import { HeartRateChart } from './heart-rate-chart'

export default async function ChartContainer({ id }: { id: string }) {
	const { data, average, heartRateData, averageHeartRate } = await getVitalSignData(id.toString())

	return (
		<>
			<BloodPressureChart
				average={average}
				data={data}
			/>
			<HeartRateChart
				average={averageHeartRate}
				data={heartRateData}
			/>
		</>
	)
}
