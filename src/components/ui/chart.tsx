'use client'

import type * as React from 'react'
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

import { cn } from '@/lib/utils'

// FIX: Make ChartProps generic. TData will represent the shape of a single data item.
export interface ChartProps<TData extends Record<string, unknown>>
	extends React.HTMLAttributes<HTMLDivElement> {
	data: TData[] // Now 'data' is an array of TData objects
	type?: 'line' | 'bar' | 'area' | 'pie'
	x: keyof TData // 'x' must be a key of TData
	y: keyof TData // 'y' must be a key of TData
	className?: string
}

// FIX: Make the Chart component generic
export function Chart<TData extends Record<string, unknown>>({
	data,
	type = 'line',
	x,
	y,
	className,
	...props
}: ChartProps<TData>) {
	const renderChart = (): React.ReactElement => {
		switch (type) {
			case 'line':
				return (
					<LineChart data={data}>
						<XAxis dataKey={x as string} /> {/* Cast to string as dataKey expects string */}
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Line
							dataKey={y as string}
							stroke="#8884d8"
							type="monotone"
						/>
					</LineChart>
				)
			case 'bar':
				return (
					<BarChart data={data}>
						<XAxis dataKey={x as string} />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Bar
							dataKey={y as string}
							fill="#8884d8"
						/>
					</BarChart>
				)
			case 'area':
				return (
					<AreaChart data={data}>
						<XAxis dataKey={x as string} />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Area
							dataKey={y as string}
							fill="#8884d8"
							stroke="#8884d8"
							type="monotone"
						/>
					</AreaChart>
				)
			case 'pie':
				return (
					<PieChart>
						<Pie
							cx="50%"
							cy="50%"
							data={data}
							dataKey={y as string}
							fill="#8884d8"
							label
							nameKey={x as string} // nameKey also expects string
							outerRadius={80}
						>
							{data.map((entry, index) => (
								<Cell
									fill={`hsl(${(index * 360) / data.length}, 70%, 60%)`}
									// key can now safely use entry[x] or entry[y] as they are keys of TData
									key={
										(entry[x] as string)?.toString() ||
										(entry[y] as string)?.toString() ||
										`cell-${index}`
									}
								/>
							))}
						</Pie>
						<Tooltip />
						<Legend />
					</PieChart>
				)
			default:
				return (
					<LineChart data={data}>
						<XAxis dataKey={x as string} />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Line
							dataKey={y as string}
							stroke="#8884d8"
							type="monotone"
						/>
					</LineChart>
				)
		}
	}

	return (
		<div
			className={cn('h-[350px] w-full', className)}
			{...props}
		>
			<ResponsiveContainer
				height="100%"
				width="100%"
			>
				{renderChart()}
			</ResponsiveContainer>
		</div>
	)
}
