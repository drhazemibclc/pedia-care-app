import type { Payment } from '@prisma/client'
import { format } from 'date-fns'

import db from '@/lib/db'
import { checkRole } from '@/utils/roles'

import { ActionDialog } from '../action-dialog'
import { ViewAction } from '../action-options'
import { Table } from '../tables/table'

const columns = [
	{
		header: 'No',
		key: 'id',
	},
	{
		header: 'Bill Date',
		key: 'billDate',
		className: '',
	},
	{
		header: 'Payment Date',
		key: 'payDate',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Total',
		key: 'total',
		className: '',
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
		header: 'Actions',
		key: 'action',
	},
]

export const PaymentsContainer = async ({ patientId }: { patientId: string }) => {
	const data = await db.payment.findMany({
		where: { patientId: patientId },
	})

	if (!data) return null
	const isAdmin = await checkRole('ADMIN')

	const renderRow = (item: Payment) => {
		return (
			<tr
				className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
				key={item.id}
			>
				<td className="flex items-center gap-2 py-2 md:gap-4 xl:py-4">#{item?.id}</td>

				<td className="lowercase">{format(item?.billDate, 'MMM d, yyyy')}</td>
				<td className="hidden items-center py-2 md:table-cell">
					{format(item?.paymentDate, 'MMM d, yyyy')}
				</td>
				<td className="">{item?.total_amount.toFixed(2)}</td>
				<td className="hidden xl:table-cell">{item?.discount.toFixed(2)}</td>
				<td className="hidden xl:table-cell">{(item?.total_amount - item?.discount).toFixed(2)}</td>
				<td className="hidden xl:table-cell">{item?.amount_paid.toFixed(2)}</td>

				<td className="">
					<div className="flex items-center">
						<ViewAction href={`/record/appointments/${item?.appointmentId}?cat=bills`} />
						{isAdmin && (
							<ActionDialog
								deleteType="payment"
								id={item?.id.toString()}
								type="delete"
							/>
						)}
					</div>
				</td>
			</tr>
		)
	}

	return (
		<div className="rounded-xl bg-white p-2 md:p-4 2xl:p-6">
			<div className="flex items-center justify-between">
				<div className="hidden items-center gap-1 lg:flex">
					<p className="font-semibold text-2xl">{data?.length ?? 0}</p>
					<span className="text-gray-600 text-sm xl:text-base">total records</span>
				</div>
			</div>

			<Table
				columns={columns}
				data={data}
				renderRow={renderRow}
			/>
		</div>
	)
}
