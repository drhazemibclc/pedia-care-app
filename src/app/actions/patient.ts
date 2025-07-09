'use server'

import { auth } from '@/lib/auth'
import db from '@/lib/db'
import { PatientFormSchema } from '@/lib/schema'

export async function updatePatient(data: typeof PatientFormSchema, pid: string) {
	try {
		const validateData = PatientFormSchema.safeParse(data)

		if (!validateData.success) {
			return {
				success: false,
				error: true,
				msg: 'Provide all required fields',
			}
		}

		const patientData = validateData.data
		await auth.api.updateUser({
			body: {
				name: `${patientData.firstName} ${patientData.lastName}`,
			},
		})

		await db.patient.update({
			data: {
				...patientData,
			},
			where: { id: pid },
		})

		return {
			success: true,
			error: false,
			msg: 'Patient info updated successfully',
		}
	} catch (error) {
		// 'error' is implicitly 'unknown' here (or explicitly if you write 'error: unknown')
		console.error(error)

		let errorMessage = 'An unknown error occurred.'

		// Type guard: Check if 'error' is an instance of 'Error'
		if (error instanceof Error) {
			errorMessage = error.message
		} else if (typeof error === 'string') {
			// If it's a string, use it directly
			errorMessage = error
		}
		// You could add more checks here, e.g., for specific API error formats

		return { success: false, error: true, msg: errorMessage }
	}
}

export async function createNewPatient(data: typeof PatientFormSchema, pid: string) {
	try {
		const validateData = PatientFormSchema.safeParse(data)

		if (!validateData.success) {
			return {
				success: false,
				error: true,
				msg: 'Provide all required fields',
			}
		}

		const patientData = validateData.data
		let patientId = pid

		if (pid === 'new-patient') {
			const user = await auth.api.createUser({
				body: {
					email: patientData.email,
					password: patientData.phone,
					name: `${patientData.firstName} ${patientData.lastName}`,

					role: 'patient',
				},
			})

			patientId = user?.user.id
		} else {
			await auth.api.updateUser({
				body: {
					image: patientData.img,
				},
			})
		}

		await db.patient.create({
			data: {
				...patientData,
				id: patientId,
				userId: patientId,
			},
		})

		return { success: true, error: false, msg: 'Patient created successfully' }
	} catch (error) {
		// 'error' is implicitly 'unknown' here (or explicitly if you write 'error: unknown')
		console.error(error)

		let errorMessage = 'An unknown error occurred.'

		// Type guard: Check if 'error' is an instance of 'Error'
		if (error instanceof Error) {
			errorMessage = error.message
		} else if (typeof error === 'string') {
			// If it's a string, use it directly
			errorMessage = error
		}
		return { success: false, error: true, msg: errorMessage }
	}
}
