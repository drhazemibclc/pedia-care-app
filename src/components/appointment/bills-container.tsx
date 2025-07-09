import type { PatientBills } from '@prisma/client'
import { format } from 'date-fns'
import { ReceiptText } from 'lucide-react'

import db from '@/lib/db'
import { calculateDiscount } from '@/utils'
import { checkRole } from '@/utils/roles'

import { ActionDialog } from '../action-dialog'
import { AddBills } from '../dialogs/add-bills'
import { Table } from '../tables/table'
import { Separator } from '../ui/separator'
import { GenerateFinalBills } from './generate-final-bill'

const columns = [
	{
		header: 'No',
		key: 'no',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Service',
		key: 'service',
	},
	{
		header: 'Date',
		key: 'date',
		className: '',
	},
	{
		header: 'Quantity',
		key: 'qnty',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Unit Price',
		key: 'price',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Total Cost',
		key: 'total',
		className: '',
	},
	{
		header: 'Action',
		key: 'action',
		className: 'hidden xl:table-cell',
	},
]

interface ExtendedBillProps extends PatientBills {
	service: {
		serviceName: string
		id: number
	}
}
export const BillsContainer = async ({ id }: { id: string }) => {
	const [data, servicesData] = await Promise.all([
		db.payment.findFirst({
			where: { appointmentId: Number(id) },
			include: {
				bills: {
					include: {
						service: { select: { serviceName: true, id: true } },
					},

					orderBy: { createdAt: 'asc' },
				},
			},
		}),
		db.services.findMany(),
	])

	let totalBills = 0

	const billData = data?.bills || []
	const discount = data
		? calculateDiscount({
				amount: data?.total_amount,
				discount: data?.discount,
			})
		: null

	if (billData) {
		totalBills = billData.reduce((sum, acc) => sum + acc.total_cost, 0)
	}

	const renderRow = (item: ExtendedBillProps) => {
		return (
			<tr
				className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
				key={item.id}
			>
				<td className="hidden py-2 md:table-cell xl:py-6"># {item?.id}</td>

				<td className="items-center py-2">{item?.service?.serviceName}</td>

				<td className="">{format(item?.serviceDate, 'MMM d, yyyy')}</td>

				<td className="hidden items-center py-2 md:table-cell">{item?.quantity}</td>
				<td className="hidden lg:table-cell">{item?.unit_cost.toFixed(2)}</td>
				<td>{item?.total_cost.toFixed(2)}</td>

				<td className="hidden xl:table-cell">
					<ActionDialog
						deleteType="bill"
						id={item?.id.toString()}
						type="delete"
					/>
				</td>
			</tr>
		)
	}

	return (
		<div className="rounded-xl bg-white p-2 2xl:p-4">
			<div className="mb-6 flex w-full flex-col justify-between md:flex-row md:items-center">
				<div className="">
					<h1 className="font-semibold text-xl">Patient Bills</h1>
					<div className="hidden items-center gap-1 lg:flex">
						<ReceiptText
							className="text-gray-500"
							size={20}
						/>
						<p className="font-semibold text-2xl">{billData?.length}</p>
						<span className="text-gray-600 text-sm xl:text-base">total records</span>
					</div>
				</div>

				{((await checkRole('ADMIN')) || (await checkRole('DOCTOR'))) && (
					<div className="mt-5 flex items-center justify-end">
						<AddBills
							appId={id}
							id={data?.id}
							servicesData={servicesData}
						/>

						<GenerateFinalBills
							id={data?.id}
							total_bill={totalBills}
						/>
					</div>
				)}
			</div>

			<Table
				columns={columns}
				data={billData ?? []}
				renderRow={renderRow}
			/>

			<Separator />

			<div className="flex flex-wrap items-center justify-between space-y-6 py-2 md:text-center lg:flex-nowrap">
				<div className="w-[120px]">
					<span className="text-gray-500">Total Bill</span>
					<p className="font-semibold text-xl">{(data?.total_amount || totalBills).toFixed(2)}</p>
				</div>
				<div className="w-[120px]">
					<span className="text-gray-500">Discount</span>
					<p className="font-semibold text-xl text-yellow-600">
						{(data?.discount || 0.0).toFixed(2)}{' '}
						<span className="text-gray-600 text-sm">
							{' '}
							({discount?.discountPercentage?.toFixed(2) || '0.0'}%)
						</span>
					</p>
				</div>
				<div className="w-[120px]">
					<span className="text-gray-500">Payable</span>
					<p className="font-semibold text-xl ">{(discount?.finalAmount || 0.0).toFixed(2)}</p>
				</div>
				<div className="w-[120px]">
					<span className="text-gray-500">Amount Paid</span>
					<p className="font-semibold text-emerald-600 text-xl">
						{(data?.amount_paid || 0.0).toFixed(2)}
					</p>
				</div>
				<div className="w-[120px]">
					<span className="text-gray-500">Unpaid Amount</span>
					<p className="font-semibold text-red-600 text-xl">
						{((discount?.finalAmount ?? 0) - (data?.amount_paid ?? 0)).toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	)
}
