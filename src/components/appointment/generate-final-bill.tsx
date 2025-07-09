'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { generateBill } from '@/app/actions/medical'
import { PaymentSchema } from '@/lib/schema'

import { CustomInput } from '../custom-input'
import { Button } from '../ui/button'
import { CardHeader } from '../ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Form } from '../ui/form'

interface DataProps {
	id?: string | number
	total_bill: number
}
export const GenerateFinalBills = ({ id, total_bill }: DataProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const _DiscountInfo = null

	const form = useForm<z.infer<typeof PaymentSchema>>({
		resolver: zodResolver(PaymentSchema),
		defaultValues: {
			id: id?.toString(),
			billDate: new Date(),
			discount: '0',
			total_amount: total_bill.toString(),
		},
	})

	const handleOnSubmit = async (values: z.infer<typeof PaymentSchema>) => {
		try {
			setIsLoading(true)

			const resp = await generateBill(values)

			if (resp.success) {
				toast.success('Patient bill generated successfully!')

				router.refresh()

				form.reset()
			} else if (resp.error) {
				toast.error(resp.msg)
			}
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="font-normal text-sm"
					size="sm"
					variant="outline"
				>
					<Plus
						className="text-gray-400"
						size={22}
					/>
					Generate Final Bill
				</Button>
			</DialogTrigger>
			<DialogContent>
				<CardHeader className="px-0">
					<DialogTitle>Patient Medical Bill</DialogTitle>
				</CardHeader>

				<Form {...form}>
					<form
						className="space-y-8"
						onSubmit={form.handleSubmit(handleOnSubmit)}
					>
						<div className="flex items-center gap-2">
							<div className="">
								<span>Total Bill</span>
								<p className="font-semibold text-3xl">{total_bill?.toFixed(2)}</p>
							</div>
						</div>

						<CustomInput
							control={form.control}
							label="Discount (%)"
							name="discount"
							placeholder="eg.: 5"
							type="input"
						/>

						<CustomInput
							control={form.control}
							inputType="date"
							label="Bill Date"
							name="billDate"
							placeholder=""
							type="input"
						/>

						<Button
							className="w-full bg-blue-600"
							disabled={isLoading}
							type="submit"
						>
							Generate Bill
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
