'use client'

import type { AppointmentStatus } from '@prisma/client'
import { Users } from 'lucide-react'
import Link from 'next/link'
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

import { formatNumber } from '@/utils'

import { Button } from '../ui/button'

type StatSummaryData = {
	PENDING?: number
	SCHEDULED?: number
	COMPLETED?: number
	CANCELLED?: number
}

export const emptyAppointmentCounts: Record<AppointmentStatus, number> = {
	PENDING: 0,
	SCHEDULED: 0,
	COMPLETED: 0,
	CANCELLED: 0,
	// add any other statuses you have
}

export const StatSummary = ({ data, total }: { data: StatSummaryData; total: number }) => {
	const dataInfo = [
		{ name: 'Total', count: total || 0, fill: 'white' },
		{
			name: 'Appointments',
			count: (data?.PENDING ?? 0) + (data?.SCHEDULED ?? 0),
			fill: '#000000',
		},
		{ name: 'Consultation', count: data?.COMPLETED || 0, fill: '#2563eb' },
	]

	const appointment = dataInfo[1].count
	const consultation = dataInfo[2].count

	return (
		<div className="h-full w-full rounded-xl bg-white p-4">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-lg">Summary</h1>

				<Button
					asChild
					className="font-normal text-xs"
					size="sm"
					variant="outline"
				>
					<Link href="/record/appointments">See details</Link>
				</Button>
			</div>

			<div className="relative h-[75%] w-full">
				<ResponsiveContainer>
					<RadialBarChart
						barSize={32}
						cx="50%"
						cy="50%"
						data={dataInfo}
						innerRadius="40%"
						outerRadius="100%"
					>
						<RadialBar
							background
							dataKey={'count'}
						/>
					</RadialBarChart>
				</ResponsiveContainer>

				<Users
					className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-gray-400"
					size={30}
				/>
			</div>

			<div className="flex justify-center gap-16">
				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-2">
						<div className="h-5 w-5 rounded-xl bg-[#000000]" />
						<h1 className="font-bold">{formatNumber(appointment)}</h1>
					</div>
					<h2 className="text-gray-400 text-xs">
						{dataInfo[1].name}({((appointment / (appointment + consultation)) * 100).toFixed(0)})
					</h2>
				</div>

				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-2">
						<div className="h-5 w-5 rounded-xl bg-[#2563eb]" />
						<h1 className="font-bold">{formatNumber(consultation)}</h1>
					</div>

					<h2 className="text-gray-400 text-xs">
						{dataInfo[2].name}({((consultation / (appointment + consultation)) * 100).toFixed(0)})
					</h2>
				</div>
			</div>
		</div>
	)
}
