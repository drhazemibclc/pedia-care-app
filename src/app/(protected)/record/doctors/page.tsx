import type { Doctor } from '@prisma/client'
import { format } from 'date-fns'
import { Users } from 'lucide-react'

import { ActionDialog } from '@/components/action-dialog'
import { ViewAction } from '@/components/action-options'
import { DoctorForm } from '@/components/forms/doctor-form'
import { Pagination } from '@/components/pagination'
import { ProfileImage } from '@/components/profile-image'
import SearchInput from '@/components/search-input'
import { Table } from '@/components/tables/table'
import type { SearchParamsProps } from '@/types'
import { checkRole } from '@/utils/roles'
import { DATA_LIMIT } from '@/utils/seetings'
import { getAllDoctors } from '@/utils/services/doctor'

const columns = [
	{
		header: 'Info',
		key: 'name',
	},
	{
		header: 'License #',
		key: 'license',
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
		header: 'Joined Date',
		key: 'created_at',
		className: 'hidden xl:table-cell',
	},
	{
		header: 'Actions',
		key: 'action',
	},
]

const DoctorsList = async (props: SearchParamsProps) => {
	const searchParams = await props.searchParams
	const page = (searchParams?.p || '1') as string
	const searchQuery = (searchParams?.q || '') as string

	const { data, totalPages, totalRecords, currentPage } = await getAllDoctors({
		page,
		search: searchQuery,
	})

	if (!data) return null
	const isAdmin = await checkRole('ADMIN')

	const renderRow = (item: Doctor) => (
		<tr
			className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
			key={item?.id}
		>
			<td className="flex items-center gap-4 p-4">
				<ProfileImage
					bgColor={item?.colorCode ?? '0000'}
					name={item?.name}
					textClassName="text-black"
					url={item?.img ?? ''}
				/>
				<div>
					<h3 className="uppercase">{item?.name}</h3>
					<span className="text-sm capitalize">{item?.specialization}</span>
				</div>
			</td>
			<td className="hidden md:table-cell">{item?.license_number}</td>
			<td className="hidden md:table-cell">{item?.phone}</td>
			<td className="hidden lg:table-cell">{item?.email}</td>
			<td className="hidden xl:table-cell">{format(item?.created_at, 'yyyy-MM-dd')}</td>
			<td>
				<div className="flex items-center gap-2">
					<ViewAction href={`doctors/${item?.id}`} />
					{isAdmin && (
						<ActionDialog
							deleteType="doctor"
							id={item?.id}
							type="delete"
						/>
					)}
				</div>
			</td>
		</tr>
	)

	return (
		<div className="rounded-xl bg-white px-3 py-6 2xl:px-6">
			<div className="flex items-center justify-between">
				<div className="hidden items-center gap-1 lg:flex">
					<Users
						className="text-gray-500"
						size={20}
					/>

					<p className="font-semibold text-2xl">{totalRecords}</p>
					<span className="text-gray-600 text-sm xl:text-base">total doctors</span>
				</div>
				<div className="flex w-full items-center justify-between gap-2 lg:w-fit lg:justify-start">
					<SearchInput />
					{isAdmin && <DoctorForm />}
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

export default DoctorsList
