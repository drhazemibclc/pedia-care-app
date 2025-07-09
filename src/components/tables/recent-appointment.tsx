import { format } from 'date-fns'
import Link from 'next/link'

import type { PartialAppointment } from '@/types/data-types'

import { AppointmentStatusIndicator } from '../appointment-status-indicator'
import { ProfileImage } from '../profile-image'
import { Button } from '../ui/button'
import { ViewAppointment } from '../view-appointment'
import { Table } from './table'

interface DataProps {
	data: PartialAppointment[]
}
const columns = [
	{ header: 'Info', key: 'name' },
	{
		header: 'Date',
		key: 'appointmentDate',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Time',
		key: 'time',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Doctor',
		key: 'doctor',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Status',
		key: 'status',
		className: 'hidden xl:table-cell',
	},
	{
		header: 'Actions',
		key: 'action',
	},
]
export const RecentAppointments = ({ data }: DataProps) => {
	const renderRow = (item: PartialAppointment) => {
		const name = `${item?.patient?.firstName} ${item?.patient?.lastName}`
		return (
			<tr
				className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
				key={item?.id}
			>
				<td className="flex items-center gap-2 py-2 xl:py-4 2xl:gap-4">
					<ProfileImage
						bgColor={item?.patient?.colorCode ?? '0000'}
						className="bg-violet-600"
						name={name}
						url={item?.patient?.img ?? ''}
					/>
					<div>
						<h3 className="text-sm uppercase md:font-medium md:text-base">{name}</h3>
						<span className="text-xs capitalize">{item?.patient?.gender?.toLowerCase()}</span>
					</div>
				</td>

				<td className="hidden md:table-cell">{format(item?.appointmentDate, 'yyyy-MM-dd')}</td>
				<td className="hidden md:table-cell">{item?.time}</td>
				<td className="hidden items-center py-2 md:table-cell">
					<div className="flex items-center 2x:gap-4 gap-2 ">
						<ProfileImage
							bgColor={item?.doctor?.colorCode ?? '0000'}
							className="bg-blue-600"
							name={item?.doctor?.name}
							textClassName="text-black font-medium"
							url={item?.doctor?.img ?? ''}
						/>
						<div>
							<h3 className="font-medium uppercase">{item?.doctor?.name}</h3>
							<span className="text-xs capitalize">{item?.doctor?.specialization}</span>
						</div>
					</div>
				</td>

				<td className="hidden xl:table-cell">
					<AppointmentStatusIndicator status={item?.status} />
				</td>

				<td>
					<div className="flex items-center gap-x-2">
						<ViewAppointment id={item.id} />

						<Link href={`/record/appointments/${item.id}`}>See all</Link>
					</div>
				</td>
			</tr>
		)
	}

	return (
		<div className="rounded-xl bg-white p-2 2xl:p-4">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-lg">Recent Appointments</h1>

				<Button
					asChild
					variant={'outline'}
				>
					<Link href="/record/appointments">View All</Link>
				</Button>
			</div>

			<Table
				columns={columns}
				data={data}
				renderRow={renderRow}
			/>
		</div>
	)
}
