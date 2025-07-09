'use server'

// Import Prisma's Payment type. Ensure this path is correct for your project.
import type { Payment as PaymentPrismaType } from '@prisma/client'
import { z } from 'zod'

import type { DiagnosisFormData } from '@/components/dialogs/add-diagnosis'
import db from '@/lib/db'
import { DiagnosisSchema, PatientBillSchema, PaymentSchema } from '@/lib/schema'
import { checkRole } from '@/utils/roles'

// Define an Input Schema for addNewBill that includes necessary IDs
const AddNewBillInputSchema = PatientBillSchema.extend({
	appointmentId: z.union([z.string(), z.number()]).transform(val => Number(val)),
	billId: z
		.union([z.number(), z.null(), z.undefined()])
		.optional()
		.transform(val => (val === 0 ? undefined : val)),
})

export const addDiagnosis = async (data: DiagnosisFormData, appointmentId: string) => {
	try {
		const validatedData = DiagnosisSchema.parse(data)

		let medicalRecord = null

		if (!validatedData.medicalId) {
			medicalRecord = await db.medicalRecords.create({
				data: {
					patientId: validatedData.patientId,
					doctorId: validatedData.doctorId,
					appointmentId: Number(appointmentId),
				},
			})
		}

		const medId = validatedData.medicalId || medicalRecord?.id

		if (typeof medId !== 'number') {
			throw new Error('Medical Record ID is invalid or missing.')
		}

		await db.diagnosis.create({
			data: {
				...validatedData,
				medicalId: medId,
			},
		})

		return {
			success: true,
			message: 'Diagnosis added successfully',
			status: 201,
		}
	} catch (error: unknown) {
		console.error('Error adding diagnosis:', error)

		let errorMessage = 'Failed to add diagnosis'
		if (error instanceof Error) {
			errorMessage = error.message
		} else if (typeof error === 'string') {
			errorMessage = error
		}

		return {
			success: false,
			error: errorMessage,
			status: 500,
		}
	}
}

export async function addNewBill(data: z.infer<typeof AddNewBillInputSchema>) {
	try {
		const isAdmin = await checkRole('ADMIN')
		const isDoctor = await checkRole('DOCTOR')

		if (!isAdmin && !isDoctor) {
			return {
				success: false,
				msg: 'You are not authorized to add a bill',
			}
		}

		const isValidData = AddNewBillInputSchema.safeParse(data)

		if (!isValidData.success) {
			return {
				success: false,
				msg: 'Invalid bill data provided',
				errors: isValidData.error.flatten(),
			}
		}

		const validatedData = isValidData.data
		// FIX: Allow billInfo to be undefined in addition to PaymentPrismaType or null
		let billInfo: PaymentPrismaType | null | undefined = null

		if (validatedData.billId === undefined || validatedData.billId === null) {
			const info = await db.appointment.findUnique({
				where: { id: validatedData.appointmentId },
				select: {
					id: true,
					patientId: true,
					bills: {
						where: {
							appointmentId: validatedData.appointmentId,
						},
					},
				},
			})

			if (!info) {
				return { success: false, msg: 'Appointment not found for billing.' }
			}

			if (info.patientId === null) {
				return { success: false, msg: 'Patient ID missing for appointment.' }
			}

			if (!info.bills || info.bills.length === 0) {
				billInfo = await db.payment.create({
					data: {
						appointmentId: info.id,
						patientId: info.patientId,
						billDate: new Date(),
						paymentDate: new Date(),
						discount: 0.0,
						amountPaid: 0.0,
						totalAmount: 0.0,
					},
				})
			} else {
				billInfo = info.bills[0]
			}
		} else {
			billInfo = await db.payment.findUnique({
				where: { id: validatedData.billId },
			})
			// It's crucial to check if billInfo is found here.
			// If findUnique returns null/undefined, the subsequent access to billInfo.id would fail.
			if (!billInfo) {
				return { success: false, msg: 'Existing bill not found with provided ID.' }
			}
		}

		// This check now correctly handles null and undefined.
		if (!billInfo) {
			return {
				success: false,
				msg: 'Bill information could not be determined for patient bill creation.',
			}
		}

		await db.patientBills.create({
			data: {
				billId: billInfo.id,
				serviceId: Number(validatedData.serviceId),
				serviceDate: new Date(validatedData.serviceDate),
				quantity: Number(validatedData.quantity),
				unitCost: Number(validatedData.unitCost),
				totalCost: Number(validatedData.totalCost),
			},
		})

		return {
			success: true,
			error: false,
			msg: 'Bill added successfully',
		}
	} catch (error: unknown) {
		console.error('Error adding new bill:', error)

		let errorMessage = 'Internal Server Error'
		if (error instanceof Error) {
			errorMessage = error.message
		} else if (typeof error === 'string') {
			errorMessage = error
		}

		return { success: false, msg: errorMessage }
	}
}

export async function generateBill(data: typeof PaymentSchema) {
	try {
		const isValidData = PaymentSchema.safeParse(data)

		if (!isValidData.success) {
			return {
				success: false,
				msg: 'Invalid payment data provided',
				errors: isValidData.error.flatten(),
			}
		}
		const validatedData = isValidData.data

		if (
			validatedData.discount === undefined ||
			validatedData.totalAmount === undefined ||
			validatedData.id === undefined ||
			validatedData.billDate === undefined
		) {
			return { success: false, msg: 'Missing required payment data for bill generation.' }
		}

		const discountAmount =
			(Number(validatedData.discount) / 100) * Number(validatedData.totalAmount)

		const res = await db.payment.update({
			data: {
				billDate: validatedData.billDate,
				discount: discountAmount,
				totalAmount: Number(validatedData.totalAmount),
			},
			where: { id: Number(validatedData.id) },
		})

		await db.appointment.update({
			data: {
				status: 'COMPLETED',
			},
			where: { id: res.appointmentId },
		})
		return {
			success: true,
			error: false,
			msg: 'Bill generated successfully',
		}
	} catch (error: unknown) {
		console.error('Error generating bill:', error)

		let errorMessage = 'Internal Server Error'
		if (error instanceof Error) {
			errorMessage = error.message
		} else if (typeof error === 'string') {
			errorMessage = error
		}

		return { success: false, msg: errorMessage }
	}
}
