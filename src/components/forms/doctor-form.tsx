'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { createNewDoctor } from '@/app/actions/admin'
import { DoctorSchema } from '@/lib/schema'
import { SPECIALIZATION } from '@/utils/seetings'

import { CustomInput, SwitchInput } from '../custom-input'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Label } from '../ui/label'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

const TYPES = [
	{ label: 'Full-Time', value: 'FULL' },
	{ label: 'Part-Time', value: 'PART' },
]

const WORKINGDAYS = [
	{ label: 'Sunday', value: 'sunday' },
	{ label: 'Monday', value: 'monday' },
	{ label: 'Tuesday', value: 'tuesday' },
	{ label: 'Wednesday', value: 'wednesday' },
	{ label: 'Thursday', value: 'thursday' },
	{ label: 'Friday', value: 'friday' },
	{ label: 'Saturday', value: 'saturday' },
]

type Day = {
	day: string
	startTime?: string
	closeTime?: string
}

export const DoctorForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const [workSchedule, setWorkSchedule] = useState<Day[]>([])

	const form = useForm<z.infer<typeof DoctorSchema>>({
		resolver: zodResolver(DoctorSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			specialization: '',
			address: '',
			type: 'FULL',
			department: '',
			img: '',
			password: '',
			licenseNumber: '',
		},
	})

	const handleSubmit = async (values: z.infer<typeof DoctorSchema>) => {
		try {
			if (workSchedule.length === 0) {
				toast.error('Please select work schedule')
				return
			}

			setIsLoading(true)
			const resp = await createNewDoctor({
				...values,
				work_schedule: workSchedule.map(day => ({
					day: day.day as
						| 'sunday'
						| 'monday'
						| 'tuesday'
						| 'wednesday'
						| 'thursday'
						| 'friday'
						| 'saturday',
					startTime: day.startTime ?? '',
					closeTime: day.closeTime ?? '',
				})),
			})

			if (resp.success) {
				toast.success('Doctor added successfully!')

				setWorkSchedule([])
				form.reset()
				router.refresh()
			} else if (resp.error) {
				toast.error(resp.message)
			}
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong')
		} finally {
			setIsLoading(false)
		}
	}

	const selectedSpecialization = form.watch('specialization')

	useEffect(() => {
		if (selectedSpecialization) {
			const department = SPECIALIZATION.find(el => el.value === selectedSpecialization)

			if (department) {
				form.setValue('department', department.department)
			}
		}
	}, [selectedSpecialization, form.setValue])

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>
					<Plus size={20} />
					Add Doctor
				</Button>
			</SheetTrigger>

			<SheetContent className="w-full overflow-y-scroll rounded-xl rounded-r-xl md:top-[5%] md:right-[1%] md:h-[90%]">
				<SheetHeader>
					<SheetTitle>Add New Doctor</SheetTitle>
				</SheetHeader>

				<div>
					<Form {...form}>
						<form
							className="mt-5 space-y-8 2xl:mt-10"
							onSubmit={form.handleSubmit(handleSubmit)}
						>
							<CustomInput
								control={form.control}
								defaultValue="FULL"
								label="Type"
								name="type"
								placeholder=""
								selectList={TYPES}
								type="radio"
							/>

							<CustomInput
								control={form.control}
								label="Full Name"
								name="name"
								placeholder="Doctor's name"
								type="input"
							/>

							<div className="flex items-center gap-2">
								<CustomInput
									control={form.control}
									label="Specialization"
									name="specialization"
									placeholder="Select specialization"
									selectList={SPECIALIZATION}
									type="select"
								/>
								<CustomInput
									control={form.control}
									label="Department"
									name="department"
									placeholder="OPD"
									type="input"
								/>
							</div>

							<CustomInput
								control={form.control}
								label="License Number"
								name="licenseNumber"
								placeholder="License Number"
								type="input"
							/>
							<div className="flex items-center gap-2">
								<CustomInput
									control={form.control}
									label="Email Address"
									name="email"
									placeholder="john@example.com"
									type="input"
								/>

								<CustomInput
									control={form.control}
									label="Contact Number"
									name="phone"
									placeholder="9225600735"
									type="input"
								/>
							</div>

							<CustomInput
								control={form.control}
								label="Address"
								name="address"
								placeholder="1479 Street, Apt 1839-G, NY"
								type="input"
							/>

							<CustomInput
								control={form.control}
								inputType="password"
								label="Password"
								name="password"
								placeholder=""
								type="input"
							/>

							<div className="mt-6">
								<Label>Working Days</Label>

								<SwitchInput
									data={WORKINGDAYS}
									setWorkSchedule={setWorkSchedule}
								/>
							</div>

							<Button
								className="w-full"
								disabled={isLoading}
								type="submit"
							>
								Submit
							</Button>
						</form>
					</Form>
				</div>
			</SheetContent>
		</Sheet>
	)
}
