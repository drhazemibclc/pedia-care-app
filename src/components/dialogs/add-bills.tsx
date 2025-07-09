'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type { Services } from '@prisma/client'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { addNewBill } from '@/app/actions/medical'
import { PatientBillSchema } from '@/lib/schema'

import { CustomInput } from '../custom-input'
import { Button } from '../ui/button'
import { CardDescription, CardHeader } from '../ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Form } from '../ui/form'

interface DataProps {
	id?: string | number
	appId?: string | number
	servicesData: Services[]
}
export const AddBills = ({ id, appId, servicesData }: DataProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const [data, setData] = useState<{ value: string; label: string }[]>()

	const form = useForm<z.infer<typeof PatientBillSchema>>({
		resolver: zodResolver(PatientBillSchema),
		defaultValues: {
			billId: String(id),
			serviceId: undefined,
			serviceDate: new Date().toDateString(),
			appointmentId: String(appId),
			quantity: undefined,
			unit_cost: undefined,
			total_cost: undefined,
		},
	})

	const handleOnSubmit = async (values: z.infer<typeof PatientBillSchema>) => {
		try {
			setIsLoading(true)
			const resp = await addNewBill(values)

			if (resp.success) {
				toast.success('Patient bill added successfully!')

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

	useEffect(() => {
		if (servicesData) {
			setData(
				servicesData?.map(service => ({
					value: service.id.toString(),
					label: service.serviceName,
				})),
			)
		}
	}, [servicesData])

	const selectedService = form.watch('serviceId')
	const quantity = form.watch('quantity')

	useEffect(() => {
		if (selectedService) {
			const unit_cost = servicesData.find(el => el.id === Number(selectedService))

			if (unit_cost) {
				form.setValue('unit_cost', unit_cost?.price.toFixed(2))
			}
			if (quantity) {
				const price = unit_cost && typeof unit_cost.price === 'number' ? unit_cost.price : 0
				form.setValue('total_cost', (Number(quantity) * price).toFixed(2))
			}
		}
	}, [selectedService, quantity, form.setValue, servicesData])

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="font-normal text-sm"
					size="sm"
				>
					<Plus
						className="text-gray-400"
						size={22}
					/>
					Add Bill
				</Button>
			</DialogTrigger>
			<DialogContent>
				<CardHeader className="px-0">
					<DialogTitle>Add Patient Bill</DialogTitle>
					<CardDescription>
						Ensure accurate readings are perform as this may affect the diagnosis and other medical
						processes.
					</CardDescription>
				</CardHeader>

				<Form {...form}>
					<form
						className="space-y-8"
						onSubmit={form.handleSubmit(handleOnSubmit)}
					>
						<div className="flex items-center gap-2">
							<CustomInput
								control={form.control}
								label="Service Name"
								name="serviceId"
								placeholder="Select service"
								selectList={data ?? []}
								type="select"
							/>
							<CustomInput
								control={form.control}
								label="Unit Cost"
								name="unit_cost"
								placeholder=""
								type="input"
							/>
						</div>

						<div className="flex items-center gap-2">
							<CustomInput
								control={form.control}
								label="Quantity"
								name="quantity"
								placeholder="Enter quantity"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Total Cost"
								name="total_cost"
								placeholder="0.00"
								type="input"
							/>
						</div>

						<CustomInput
							control={form.control}
							inputType="date"
							label="Service Date"
							name="serviceDate"
							placeholder=""
							type="input"
						/>

						<Button
							className="w-full bg-blue-600"
							disabled={isLoading}
							type="submit"
						>
							Submit
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
