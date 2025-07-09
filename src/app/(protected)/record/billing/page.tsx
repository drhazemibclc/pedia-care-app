import type { Patient, Payment } from '@prisma/client'
import { format } from 'date-fns'
import { ReceiptText } from 'lucide-react'

import { ActionDialog } from '@/components/action-dialog'
import { ViewAction } from '@/components/action-options'
import { Pagination } from '@/components/pagination'
import { ProfileImage } from '@/components/profile-image'
import SearchInput from '@/components/search-input'
import { Table } from '@/components/tables/table'
import { cn } from '@/lib/utils'
import type { SearchParamsProps } from '@/types'
import { checkRole } from '@/utils/roles'
import { DATA_LIMIT } from '@/utils/seetings'
import { getPaymentRecords } from '@/utils/services/payments'

const columns = [
	{
		header: 'RNO',
		key: 'id',
	},
	{
		header: 'Patient',
		key: 'info',
		className: '',
	},
	{
		header: 'Contact',
		key: 'phone',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Bill Date',
		key: 'bill_date',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Total',
		key: 'total',
		className: 'hidden xl:table-cell',
	},
	{
		header: 'Discount',
		key: 'discount',
		className: 'hidden xl:table-cell',
	},
	{
		header: 'Payable',
		key: 'payable',
		className: 'hidden xl:table-cell',
	},
	{
		header: 'Paid',
		key: 'payable',
		className: 'hidden xl:table-cell',
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

interface ExtendedProps extends Payment {
	patient: {
		id: string
		first_name: string
		last_name: string
		phone: string
		email: string
		address: string
		date_of_birth: Date
		gender: string
		img: string | null
		colorCode: string | null
	}
}

const BillingPage = async (props: SearchParamsProps) => {
	const searchParams = await props.searchParams
	const page = (searchParams?.p || '1') as string
	const searchQuery = (searchParams?.q || '') as string

	const {
		data: rawData,
		totalPages,
		totalRecords,
		currentPage,
	} = await getPaymentRecords({
		page,
		search: searchQuery,
	})

	// Ensure each patient object has all required fields for ExtendedProps
	const data = rawData?.map(item => {
		const patient = item?.patient as Patient
		return {
			...item,
			patient: {
				...patient,
				img: patient?.img ?? '',
				colorCode: patient?.colorCode ?? '0000',
			},
		}
	}) as ExtendedProps[]
	const isAdmin = await checkRole('ADMIN')

	if (!data) return null

	const renderRow = (item: ExtendedProps) => {
		const name = `${item?.patient?.first_name} ${item?.patient?.last_name}`
		const patient = item?.patient

		return (
			<tr
				className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
				key={item?.id + patient?.id}
			>
				<td># {item?.id}</td>
				<td className="flex items-center gap-4 p-4">
					<ProfileImage
						bgColor={patient?.colorCode ?? '0000'}
						name={name}
						textClassName="text-black"
						url={item?.patient?.img ?? ''}
					/>
					<div>
						<h3 className="uppercase">{name}</h3>
						<span className="text-sm capitalize">{patient?.gender}</span>
					</div>
				</td>
				<td className="hidden md:table-cell">{patient?.phone}</td>
				<td className="hidden md:table-cell">{format(item?.bill_date, 'yyyy-MM-dd')}</td>
				<td className="hidden xl:table-cell">{item?.total_amount?.toFixed(2)}</td>
				<td className="hidden xl:table-cell">{item?.discount?.toFixed(2)}</td>
				<td className="hidden xl:table-cell">{(item?.total_amount - item?.discount).toFixed(2)}</td>
				<td className="hidden xl:table-cell">{(item?.amount_paid ?? 0).toFixed(2)}</td>
				<td className="hidden xl:table-cell">
					<span
						className={cn(
							item?.status === 'UNPAID'
								? 'text-red-600'
								: item?.status === 'PAID'
									? 'text-emerald-600'
									: 'text-gray-600',
						)}
					>
						{item?.status}
					</span>
				</td>

				<td>
					<ViewAction href={`/appointments/${item?.appointment_id}?cat=bills`} />

					{isAdmin && (
						<ActionDialog
							deleteType="payment"
							id={item?.id.toString()}
							type="delete"
						/>
					)}
				</td>
			</tr>
		)
	}

	return (
		<div className="rounded-xl bg-white px-3 py-6 2xl:px-6">
			<div className="flex items-center justify-between">
				<div className="hidden items-center gap-1 lg:flex">
					<ReceiptText
						className="text-gray-500"
						size={20}
					/>

					<p className="font-semibold text-2xl">{totalRecords}</p>
					<span className="text-gray-600 text-sm xl:text-base">total records</span>
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

				<Pagination
					currentPage={currentPage as number}
					limit={DATA_LIMIT}
					totalPages={totalPages ?? 1}
					totalRecords={totalRecords as number}
				/>
			</div>
		</div>
	)
}

export default BillingPage
