import type { Patient } from '@prisma/client'
import { format } from 'date-fns'
import { UserPen, Users } from 'lucide-react'

import { ActionDialog } from '@/components/action-dialog'
import { ActionOptions, ViewAction } from '@/components/action-options'
import { Pagination } from '@/components/pagination'
import { ProfileImage } from '@/components/profile-image'
import SearchInput from '@/components/search-input'
import { Table } from '@/components/tables/table'
import { Button } from '@/components/ui/button'
import type { SearchParamsProps } from '@/types'
import { calculateAge } from '@/utils'
import { checkRole } from '@/utils/roles'
import { DATA_LIMIT } from '@/utils/seetings'
import { getAllPatients } from '@/utils/services/patient'

const columns = [
	{
		header: 'Patient Name',
		key: 'name',
	},
	{
		header: 'Gender',
		key: 'gender',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Phone',
		key: 'contact',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Email',
		key: 'email',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Address',
		key: 'address',
		className: 'hidden xl:table-cell',
	},
	{
		header: 'Last Visit',
		key: 'created_at',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Last Treatment',
		key: 'treatment',
		className: 'hidden 2xl:table-cell',
	},
	{
		header: 'Actions',
		key: 'action',
	},
]

interface PatientProps extends Patient {
	appointments: {
		medical: {
			created_at: Date
			treatment_plan: string
		}[]
	}[]
}
const PatientList = async (props: SearchParamsProps) => {
	const searchParams = await props.searchParams
	const page = (searchParams?.p || '1') as string
	const searchQuery = (searchParams?.q || '') as string

	const { data, totalPages, totalRecords, currentPage } = await getAllPatients({
		page,
		search: searchQuery,
	})
	const isAdmin = await checkRole('ADMIN')

	if (!data) return null

	const renderRow = (item: PatientProps) => {
		const lastVisit = item?.appointments[0]?.medical[0] || null

		const name = `${item?.first_name} ${item?.last_name}`

		return (
			<tr
				className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
				key={item?.id}
			>
				<td className="flex items-center gap-4 p-4">
					<ProfileImage
						bgColor={item?.colorCode ?? '0000'}
						name={name}
						textClassName="text-black"
						url={item?.img ?? ''}
					/>
					<div>
						<h3 className="uppercase">{name}</h3>
						<span className="text-sm capitalize">{calculateAge(item?.date_of_birth)}</span>
					</div>
				</td>
				<td className="hidden md:table-cell">{item?.gender}</td>
				<td className="hidden md:table-cell">{item?.phone}</td>
				<td className="hidden lg:table-cell">{item?.email}</td>
				<td className="hidden xl:table-cell">{item?.address}</td>
				<td className="hidden xl:table-cell">
					{lastVisit ? (
						format(lastVisit?.created_at, 'yyyy-MM-dd HH:mm:ss')
					) : (
						<span className="text-gray-400 italic">No last visit</span>
					)}
				</td>
				<td className="hidden xl:table-cell">
					{lastVisit ? (
						lastVisit?.treatment_plan
					) : (
						<span className="text-gray-400 italic">No last treatment</span>
					)}
				</td>
				<td>
					<div className="flex items-center gap-2">
						<ViewAction href={`/patient/${item?.id}`} />

						<ActionOptions>
							<div className="space-y-3">
								<Button
									className="font-light text-xs"
									variant={'ghost'}
								>
									<UserPen size={16} />
									Edit
								</Button>

								{isAdmin && (
									<ActionDialog
										deleteType="patient"
										id={item.id}
										type="delete"
									/>
								)}
							</div>
						</ActionOptions>
					</div>
				</td>
			</tr>
		)
	}

	return (
		<div className="rounded-xl bg-white px-3 py-6 2xl:px-6">
			<div className="flex items-center justify-between">
				<div className="hidden items-center gap-1 lg:flex">
					<Users
						className="text-gray-500"
						size={20}
					/>

					<p className="font-semibold text-2xl">{totalRecords}</p>
					<span className="text-gray-600 text-sm xl:text-base">total patients</span>
				</div>
				<div className="flex w-full items-center justify-between gap-2 lg:w-fit lg:justify-start">
					<SearchInput />
				</div>
			</div>

			<div className="mt-4">
				<Table
					columns={columns}
					data={data}
					renderRow={renderRow}
				/>

				{totalPages && (
					<Pagination
						currentPage={currentPage}
						limit={DATA_LIMIT}
						totalPages={totalPages}
						totalRecords={totalRecords}
					/>
				)}
			</div>
		</div>
	)
}

export default PatientList
