'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type { Patient } from '@prisma/client'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { type Resolver, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { createNewPatient, updatePatient } from '@/app/actions/patient'
import { GENDER, MARITAL_STATUS, RELATION } from '@/lib'
import { type AuthUser, useUser } from '@/lib/auth/use-auth'
import { PatientFormSchema } from '@/lib/schema'

import { CustomInput } from './custom-input'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Form } from './ui/form'

type PatientFormValues = z.infer<typeof PatientFormSchema>

interface DataProps {
	data?: Patient
	type: 'create' | 'update'
}

const defaultValues: PatientFormValues = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	address: '',
	dateOfBirth: new Date(),
	gender: 'MALE',
	marital_status: 'single',
	emergency_contactName: '',
	emergency_contactNumber: '',
	relation: 'mother',
	blood_group: '',
	allergies: '',
	medical_conditions: '',
	insuranceNumber: '',
	insurance_provider: '',
	medical_history: '',
	medical_consent: false,
	privacy_consent: false,
	service_consent: false,
}

export const NewPatient = ({ data, type }: DataProps) => {
	const router = useRouter()
	const { user, isLoading } = useUser()
	const [loading, setLoading] = useState(false)

	const form = useForm<PatientFormValues>({
		resolver: zodResolver(PatientFormSchema) as Resolver<PatientFormValues>,
		defaultValues,
		mode: 'onBlur',
	})

	const getCreateDefaultValues = useCallback((user: AuthUser): PatientFormValues => {
		return {
			...defaultValues,
			firstName: user?.firstName ?? '',
			lastName: user?.lastName ?? '',
			email: user?.email ?? '',
		}
	}, [])

	const getPersonalInfo = useCallback((data: Patient) => {
		return {
			firstName: data.firstName ?? '',
			lastName: data.lastName ?? '',
			email: data.email ?? '',
			phone: data.phone ?? '',
			dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : new Date(),
			gender: data.gender,
			marital_status: data.marital_status as PatientFormValues['marital_status'],
			address: data.address ?? '',
		}
	}, [])

	const getFamilyInfo = useCallback((data: Patient) => {
		return {
			emergency_contactName: data.emergency_contactName ?? '',
			emergency_contactNumber: data.emergency_contactNumber ?? '',
			relation: data.relation as PatientFormValues['relation'],
		}
	}, [])

	const getMedicalInfo = useCallback((data: Patient) => {
		return {
			blood_group: data.blood_group ?? '',
			allergies: data.allergies ?? '',
			medical_conditions: data.medical_conditions ?? '',
			insuranceNumber: data.insuranceNumber ?? '',
			insurance_provider: data.insurance_provider ?? '',
			medical_history: data.medical_history ?? '',
		}
	}, [])

	const getConsentInfo = useCallback((data: Patient) => {
		return {
			medical_consent: data.medical_consent ?? false,
			privacy_consent: data.privacy_consent ?? false,
			service_consent: data.service_consent ?? false,
		}
	}, [])

	const getUpdateDefaultValues = useCallback(
		(data: Patient): PatientFormValues => {
			return {
				...getPersonalInfo(data),
				...getFamilyInfo(data),
				...getMedicalInfo(data),
				...getConsentInfo(data),
			}
		},
		[getPersonalInfo, getFamilyInfo, getMedicalInfo, getConsentInfo],
	)

	useEffect(() => {
		if (isLoading) return

		if (type === 'create') {
			if (user) {
				form.reset(getCreateDefaultValues(user))
			}
		} else if (type === 'update' && data) {
			form.reset(getUpdateDefaultValues(data))
		}
	}, [isLoading, user, data, type, form, getCreateDefaultValues, getUpdateDefaultValues])

	const onSubmit = async (values: PatientFormValues) => {
		setLoading(true)
		const userId = user?.id ?? 'anonymous_user'
		const action = type === 'create' ? createNewPatient : updatePatient

		try {
			const res = await action(values, userId)
			if (res?.success) {
				toast.success(res.msg)
				form.reset()
				router.push('/patient')
			} else {
				toast.error(res?.msg || 'Submission failed.')
			}
		} catch (error) {
			console.error('Error:', error)
			const message = error instanceof Error ? error.message : 'An unexpected error occurred.'
			toast.error(message)
		} finally {
			setLoading(false)
		}
	}

	if (isLoading) {
		return (
			<div className="flex h-64 items-center justify-center">
				<Loader2 className="h-8 w-8 animate-spin text-primary" />
				<p className="ml-2 text-muted-foreground">Loading user information...</p>
			</div>
		)
	}

	return (
		<Card className="w-full max-w-6xl p-4">
			<CardHeader>
				<CardTitle>Patient Registration</CardTitle>
				<CardDescription>
					Please provide all the information below to help us understand better and provide good and
					quality service to you.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form
						className="mt-5 space-y-8"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						{/* Personal Info */}
						<h3 className="font-semibold text-lg">Personal Information</h3>
						<div className="flex flex-col items-center gap-6 md:flex-row md:gap-4">
							<CustomInput
								control={form.control}
								label="First Name"
								name="firstName"
								placeholder="John"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Last Name"
								name="lastName"
								placeholder="Doe"
								type="input"
							/>
						</div>
						<CustomInput
							control={form.control}
							label="Email Address"
							name="email"
							placeholder="john@example.com"
							type="input"
						/>
						<div className="flex flex-col items-center gap-6 md:flex-row md:gap-4">
							<CustomInput
								control={form.control}
								label="Gender"
								name="gender"
								placeholder="Select gender"
								selectList={GENDER}
								type="select"
							/>
							<CustomInput
								control={form.control}
								inputType="date"
								label="Date of Birth"
								name="dateOfBirth"
								placeholder="YYYY-MM-DD"
								type="input"
							/>
						</div>
						<div className="flex flex-col items-center gap-6 md:flex-row md:gap-4">
							<CustomInput
								control={form.control}
								label="Contact Number"
								name="phone"
								placeholder="9225600735"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Marital Status"
								name="marital_status"
								placeholder="Select marital status"
								selectList={MARITAL_STATUS}
								type="select"
							/>
						</div>
						<CustomInput
							control={form.control}
							label="Address"
							name="address"
							placeholder="1479 Street, Apt 1839-G, NY"
							type="input"
						/>

						{/* Family Info */}
						<div className="space-y-8">
							<h3 className="font-semibold text-lg">Family Information</h3>
							<CustomInput
								control={form.control}
								label="Emergency contact name"
								name="emergency_contactName"
								placeholder="Anne Smith"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Emergency contact"
								name="emergency_contactNumber"
								placeholder="675444467"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Relation"
								name="relation"
								placeholder="Select relation"
								selectList={RELATION}
								type="select"
							/>
						</div>

						{/* Medical Info */}
						<div className="space-y-8">
							<h3 className="font-semibold text-lg">Medical Information</h3>
							<CustomInput
								control={form.control}
								label="Blood group"
								name="blood_group"
								placeholder="A+"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Allergies"
								name="allergies"
								placeholder="Milk"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Medical conditions"
								name="medical_conditions"
								placeholder="Medical conditions"
								type="input"
							/>
							<CustomInput
								control={form.control}
								label="Medical history"
								name="medical_history"
								placeholder="Medical history"
								type="input"
							/>
							<div className="flex flex-col items-center gap-6 md:flex-row md:gap-4">
								<CustomInput
									control={form.control}
									label="Insurance provider"
									name="insurance_provider"
									placeholder="Provider"
									type="input"
								/>
								<CustomInput
									control={form.control}
									label="Insurance number"
									name="insuranceNumber"
									placeholder="1234567890"
									type="input"
								/>
							</div>
						</div>

						{/* Consent (only on creation) */}
						{type !== 'update' && (
							<div>
								<h3 className="mb-2 font-semibold text-lg">Consent</h3>
								<div className="space-y-6">
									<CustomInput
										control={form.control}
										label="Privacy Policy Agreement"
										name="privacy_consent"
										placeholder="I consent to the collection..."
										type="checkbox"
									/>
									<CustomInput
										control={form.control}
										label="Terms of Service Agreement"
										name="service_consent"
										placeholder="I agree to the Terms..."
										type="checkbox"
									/>
									<CustomInput
										control={form.control}
										label="Informed Medical Consent"
										name="medical_consent"
										placeholder="I provide informed consent..."
										type="checkbox"
									/>
								</div>
							</div>
						)}

						<Button
							className="w-full px-6 md:w-fit"
							disabled={loading}
							type="submit"
						>
							{loading ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : type === 'create' ? (
								'Submit'
							) : (
								'Update'
							)}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
