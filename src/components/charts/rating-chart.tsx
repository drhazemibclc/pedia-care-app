'use client'

import { Pie, PieChart, ResponsiveContainer } from 'recharts'

export const RatingChart = ({
	totalRatings,
	averageRating,
}: {
	totalRatings: number
	averageRating: number
}) => {
	const negative = 5 - averageRating

	const data = [
		{ name: 'Positive', value: averageRating, fill: '#2ecc71' },
		{ name: 'Negative', value: negative, fill: '#e74c3c' },
	]

	return (
		<div className="relative h-80 rounded-md bg-white p-4">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-xl">Ratings</h1>
			</div>

			<ResponsiveContainer
				height={'100%'}
				width={'100%'}
			>
				<PieChart>
					<Pie
						cx={'50%'}
						cy={'50%'}
						data={data}
						dataKey={'value'}
						endAngle={0}
						fill="#8884d8"
						innerRadius={70}
						startAngle={180}
					/>
				</PieChart>
			</ResponsiveContainer>

			<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform text-center">
				<h1 className="font-bold text-2xl">{averageRating?.toFixed(1)}</h1>
				<p className="text-gray-500 text-xs">of max ratings</p>
			</div>

			<h2 className="absolute right-0 bottom-16 left-0 m-auto text-center font-medium">
				Rated by {totalRatings} patients
			</h2>
		</div>
	)
}
