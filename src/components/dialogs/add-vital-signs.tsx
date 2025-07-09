'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { addVitalSigns } from '@/app/actions/appointment'
import { VitalSignsSchema } from '@/lib/schema'

import { CustomInput } from '../custom-input'
import { Button } from '../ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog'
import { Form } from '../ui/form'

interface AddVitalSignsProps {
	patientId: string
	doctorId: string
	appointmentId: string
	medicalId?: string
}

export type VitalSignsFormData = z.infer<typeof VitalSignsSchema>

export const AddVitalSigns = ({
	patientId,
	doctorId,
	appointmentId,
	medicalId,
}: AddVitalSignsProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const form = useForm<VitalSignsFormData>({
		resolver: zodResolver(VitalSignsSchema),
		defaultValues: {
			patientId: patientId,
			medicalId: medicalId,
			bodyTemperature: undefined,
			heartRate: undefined,
			systolic: undefined,
			diastolic: undefined,
			respiratory_rate: undefined,
			oxygen_saturation: undefined,
			weight: undefined,
			height: undefined,
		},
	})

	const handleOnSubmit = async (data: VitalSignsFormData) => {
		try {
			setIsLoading(true)

			const res = await addVitalSigns(data, appointmentId, doctorId)

			if (res.success) {
				router.refresh()
				toast.success(res.msg)
				form.reset()
			} else {
				toast.error(res.msg)
			}
		} catch (error) {
			console.log(error)
			toast.error('Failed to add vital signs')
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
						className="text-gray-500"
						size={22}
					/>{' '}
					Add Vital Signs
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add Vital Signs</DialogTitle>
					<DialogDescription>Add vital signs for the patient</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						className="space-y-8"
						onSubmit={form.handleSubmit(handleOnSubmit)}
					>
						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Body Temperature (°C)"
								name="bodyTemperature"
								placeholder="eg.:37.5"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Heart Rate (BPM)"
								name="heartRate"
								placeholder="eg: 54-123"
								type="input"
							/>
						</div>

						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Systolic BP"
								name="systolic"
								placeholder="eg: 120"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Diastolic BP"
								name="diastolic"
								placeholder="eg: 80"
								type="input"
							/>
						</div>

						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Weight (Kg)"
								name="weight"
								placeholder="eg.: 80"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Height (Cm)"
								name="height"
								placeholder="eg.: 175"
								type="input"
							/>
						</div>

						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Respiratory Rate"
								name="respiratory_rate"
								placeholder="Optional"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Oxygen Saturation"
								name="oxygen_saturation"
								placeholder="Optional"
								type="input"
							/>
						</div>

						<Button
							className="w-full"
							disabled={isLoading}
							type="submit"
						>
							{isLoading ? 'Submitting...' : 'Submit'}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
