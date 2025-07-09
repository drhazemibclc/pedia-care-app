import type { Appointment } from '@prisma/client'
import { format } from 'date-fns'
import { BriefcaseBusiness } from 'lucide-react'

import { AppointmentActionOptions } from '@/components/appointment-actions'
import { AppointmentContainer } from '@/components/appointment-container'
import { AppointmentStatusIndicator } from '@/components/appointment-status-indicator'
import { Pagination } from '@/components/pagination'
import { ProfileImage } from '@/components/profile-image'
import SearchInput from '@/components/search-input'
import { Table } from '@/components/tables/table'
import { ViewAppointment } from '@/components/view-appointment'
import { getSession } from '@/lib/auth'
import { checkRole, getRole } from '@/utils/roles'
import { DATA_LIMIT } from '@/utils/seetings'
import { getPatientAppointments } from '@/utils/services/appointment'

const columns = [
	{ header: 'Info', key: 'name' },
	{ header: 'Date', key: 'appointment_date', className: 'hidden md:table-cell' },
	{ header: 'Time', key: 'time', className: 'hidden md:table-cell' },
	{ header: 'Doctor', key: 'doctor', className: 'hidden md:table-cell' },
	{ header: 'Status', key: 'status', className: 'hidden xl:table-cell' },
	{ header: 'Actions', key: 'action' },
]

type DataProps = Appointment & {
	patient?: {
		id: string
		first_name: string
		last_name: string
		date_of_birth: Date
		gender: string
		phone: string
		img?: string | null
		colorCode?: string | null
	}
	doctor?: {
		id: string
		name: string
		specialization?: string
		img?: string | null
		colorCode?: string | null
	}
}

function getQueryId(
	userRole: string | undefined,
	id: string | undefined,
	userId: string | undefined,
): string | undefined {
	if (userRole === 'ADMIN') return id
	if (userRole === 'DOCTOR' || userRole === 'NURSE') return id ?? userId
	if (userRole === 'PATIENT') return userId
	return undefined
}

const Appointments = async (props: {
	searchParams?: Promise<{ [key: string]: string | undefined }>
}) => {
	const searchParams = await props.searchParams
	const session = await getSession()
	const userId = session?.user.id
	const userRole = await getRole()
	const isPatient = await checkRole('PATIENT')

	const page = searchParams?.p || '1'
	const searchQuery = searchParams?.q || ''
	const id = searchParams?.id

	const queryId = getQueryId(userRole, id, userId)

	const appointmentsResponse = await getPatientAppointments({
		page,
		search: searchQuery,
		id: queryId,
	})

	let data: DataProps[] = []
	let totalPages = 1
	let totalRecord = 0
	let currentPage = 1

	if ('data' in appointmentsResponse) {
		data = appointmentsResponse.data.data ?? []
		totalPages = appointmentsResponse.data.totalPages ?? 1
		totalRecord = appointmentsResponse.data.totalRecord ?? 0
		currentPage = appointmentsResponse.data.currentPage ?? 1
	}

	const renderItem = (item: DataProps) => {
		const patientName = `${item?.patient?.first_name ?? ''} ${item?.patient?.last_name ?? ''}`

		return (
			<tr
				className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
				key={item?.id}
			>
				<td className="flex items-center gap-2 py-2 md:gap-4 xl:py-4">
					<ProfileImage
						bgColor={item?.patient?.colorCode ?? '0000'}
						name={patientName}
						url={item?.patient?.img ?? ''}
					/>
					<div>
						<h3 className="font-semibold uppercase">{patientName}</h3>
						<span className="text-xs capitalize md:text-sm">
							{item?.patient?.gender?.toLowerCase() ?? 'n/a'}
						</span>
					</div>
				</td>

				<td className="hidden md:table-cell">
					{format(new Date(item.appointment_date), 'yyyy-MM-dd')}
				</td>
				<td className="hidden md:table-cell">{item.time}</td>

				<td className="hidden items-center py-2 md:table-cell">
					<div className="flex items-center gap-2 md:gap-4">
						<ProfileImage
							bgColor={item?.doctor?.colorCode ?? '0000'}
							name={item?.doctor?.name ?? ''}
							textClassName="text-black"
							url={item?.doctor?.img ?? ''}
						/>
						<div>
							<h3 className="font-semibold uppercase">{item?.doctor?.name}</h3>
							<span className="text-xs capitalize md:text-sm">
								{item?.doctor?.specialization ?? ''}
							</span>
						</div>
					</div>
				</td>

				<td className="hidden xl:table-cell">
					<AppointmentStatusIndicator status={item.status ?? 'N/A'} />
				</td>

				<td>
					<div className="flex items-center gap-2">
						<ViewAppointment id={item?.id.toString()} />
						<AppointmentActionOptions
							appointmentId={item.id}
							doctorId={item?.doctor_id}
							patientId={item?.patient_id}
							status={item?.status}
							userId={userId ?? 'N/A'}
						/>
					</div>
				</td>
			</tr>
		)
	}

	return (
		<div className="rounded-xl bg-white p-2 md:p-4 2xl:p-6">
			<div className="flex items-center justify-between">
				<div className="hidden items-center gap-1 lg:flex">
					<BriefcaseBusiness
						className="text-gray-500"
						size={20}
					/>
					<p className="font-semibold text-2xl">{totalRecord}</p>
					<span className="text-gray-600 text-sm xl:text-base">total appointments</span>
				</div>

				<div className="flex w-full items-center justify-between gap-2 lg:w-fit lg:justify-start">
					<SearchInput />
					{isPatient && <AppointmentContainer id={userId ?? 'N/A'} />}
				</div>
			</div>

			<div className="mt-6">
				<Table
					columns={columns}
					data={data}
					renderRow={renderItem}
				/>

				{data.length > 0 && (
					<Pagination
						currentPage={currentPage}
						limit={DATA_LIMIT}
						totalPages={totalPages}
						totalRecords={totalRecord}
					/>
				)}
			</div>
		</div>
	)
}

export default Appointments
