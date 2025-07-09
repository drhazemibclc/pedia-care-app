'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { addDiagnosis } from '@/app/actions/medical'
import { DiagnosisSchema } from '@/lib/schema'

import { CustomInput } from '../custom-input'
import { Button } from '../ui/button'
import { CardDescription, CardHeader } from '../ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Form } from '../ui/form'

interface AddDiagnosisProps {
	patientId: string
	doctorId: string
	appointmentId: string
	medicalId: string
}

export type DiagnosisFormData = z.infer<typeof DiagnosisSchema>
export const AddDiagnosis = ({
	patientId,
	doctorId,
	appointmentId,
	medicalId,
}: AddDiagnosisProps) => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const form = useForm<DiagnosisFormData>({
		resolver: zodResolver(DiagnosisSchema),
		defaultValues: {
			patientId: patientId,
			medicalId: medicalId,
			doctorId: doctorId,
			symptoms: '',
			diagnosis: '',
			notes: '',
			prescribed_medications: '',
			follow_up_plan: '',
		},
	})

	const handleOnSubmit = async (data: DiagnosisFormData) => {
		try {
			setLoading(true)

			const res = await addDiagnosis(data, appointmentId)

			if (res.success) {
				toast.success(res.message)
				router.refresh()
				form.reset()
			} else {
				toast.error(res.error)
			}
		} catch (error) {
			console.log(error)
			toast.error('Failed to add diagnosis')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="mt-4 bg-blue-600 text-white"
					size={'lg'}
					variant={'outline'}
				>
					<Plus
						className="text-white"
						size={22}
					/>
					Add Diagnosis
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[60%] 2xl:max-w-[40%]">
				<CardHeader className="px-0">
					<DialogTitle>Add New Diagnosis</DialogTitle>
					<CardDescription>
						Ensure accurate findings are presented and corrected accordingly to ensure that they are
						correct for your application and that they do not result in an error.
					</CardDescription>
				</CardHeader>

				<Form {...form}>
					<form
						className="space-y-6"
						onSubmit={form.handleSubmit(handleOnSubmit)}
					>
						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Symptoms"
								name="symptoms"
								placeholder="Enter symptoms here ..."
								type="textarea"
							/>
						</div>

						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Diagnosis (Findings)"
								name="diagnosis"
								placeholder="Enter diagnosis here ..."
								type="textarea"
							/>
						</div>
						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Prescriptions for this patient"
								name="prescribed_medications"
								placeholder="Enter principles here ..."
								type="textarea"
							/>
						</div>

						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Additional Notes for this treatment"
								name="notes"
								placeholder="Optional note"
								type="textarea"
							/>
							<CustomInput
								control={form.control}
								label="Follow Up Plan"
								name="follow_up_plan"
								placeholder="Optional"
								type="textarea"
							/>
						</div>

						<Button
							className="w-full bg-blue-600"
							disabled={loading}
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
