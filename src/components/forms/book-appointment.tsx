'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type { Doctor, Patient } from '@prisma/client'
import { UserPen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { createNewAppointment } from '@/actions/appointment'
import { AppointmentSchema } from '@/lib/schema'
import { generateTimes } from '@/utils'

import { CustomInput } from '../custom-input'
import { ProfileImage } from '../profile-image'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

const TYPES = [
	{ label: 'General Consultation', value: 'General Consultation' },
	{ label: 'General Check up', value: 'General Check Up' },
	{ label: 'Antenatal', value: 'Antenatal' },
	{ label: 'Maternity', value: 'Maternity' },
	{ label: 'Lab Test', value: 'Lab Test' },
	{ label: 'ANT', value: 'ANT' },
]

export const BookAppointment = ({ data, doctors }: { data: Patient; doctors: Doctor[] }) => {
	const [loading, _setLoading] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const router = useRouter()
	const [physicians, _setPhysicians] = useState<Doctor[] | undefined>(doctors)

	const appointmentTimes = generateTimes(8, 17, 30)

	const patientName = `${data?.firstName} ${data?.lastName}`

	const form = useForm<z.infer<typeof AppointmentSchema>>({
		resolver: zodResolver(AppointmentSchema),
		defaultValues: {
			doctorId: '',
			appointmentDate: '',
			time: '',
			type: '',
			note: '',
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof AppointmentSchema>> = async values => {
		try {
			setIsSubmitting(true)
			const newData = { ...values, patientId: data?.id ?? 'N/A' }

			const res = await createNewAppointment(newData)

			if (res.success) {
				form.reset({})
				router.refresh()
				toast.success('Appointment created successfully')
			}
		} catch (_error) {
			toast.error('Something went wrong. Try again later.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className="flex w-full items-center justify-start gap-2 bg-blue-600 font-light text-sm text-white"
					variant="ghost"
				>
					<UserPen size={16} /> Book Appointment
				</Button>
			</SheetTrigger>

			<SheetContent className="w-full rounded-xl rounded-r-2xl md:top-[2.5%] md:right-[1%] md:h-p[95%]">
				{loading ? (
					<div className="flex h-full items-center justify-center">
						<span>Loading</span>
					</div>
				) : (
					<div className="h-full overflow-y-auto p-4">
						<SheetHeader>
							<SheetTitle>Book Appointment</SheetTitle>
						</SheetHeader>

						<Form {...form}>
							<form
								className="mt-5 space-y-8 2xl:mt-10"
								onSubmit={form.handleSubmit(onSubmit)}
							>
								<div className="flex w-full items-center gap-4 rounded-md border border-input bg-background px-3 py-1">
									<ProfileImage
										bgColor={data?.colorCode ?? undefined}
										className="size-16 border border-input"
										name={patientName}
										url={data?.img ?? undefined}
									/>

									<div>
										<p className="font-semibold text-lg">{patientName}</p>
										<span className="text-gray-500 text-sm capitalize">{data?.gender}</span>
									</div>
								</div>

								<CustomInput
									control={form.control}
									label="Appointment Type"
									name="type"
									placeholder="Select a appointment type"
									selectList={TYPES}
									type="select"
								/>

								<FormField
									control={form.control}
									name="doctorId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Physician</FormLabel>
											<Select
												defaultValue={field.value}
												disabled={isSubmitting}
												onValueChange={field.onChange}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a physician" />
													</SelectTrigger>
												</FormControl>
												<SelectContent className="">
													{physicians?.map(i => (
														<SelectItem
															className="p-2"
															key={i.id}
															value={i.id}
														>
															<div className="flex flex-row gap-2 p-2">
																<ProfileImage
																	bgColor={i?.colorCode ?? undefined}
																	name={i?.name}
																	textClassName="text-black"
																	url={i?.img ?? undefined}
																/>
																<div>
																	<p className="text-start font-medium ">{i.name}</p>
																	<span className="text-gray-600 text-sm">{i?.specialization}</span>
																</div>
															</div>
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="flex items-center gap-2">
									<CustomInput
										control={form.control}
										inputType="date"
										label="Date"
										name="appointmentDate"
										placeholder=""
										type="input"
									/>
									<CustomInput
										control={form.control}
										label="Time"
										name="time"
										placeholder="Select time"
										selectList={appointmentTimes}
										type="select"
									/>
								</div>

								<CustomInput
									control={form.control}
									label="Additional Note"
									name="note"
									placeholder="Additional note"
									type="textarea"
								/>

								<Button
									className="w-full bg-blue-600"
									disabled={isSubmitting}
									type="submit"
								>
									Submit
								</Button>
							</form>
						</Form>
					</div>
				)}
			</SheetContent>
		</Sheet>
	)
}
