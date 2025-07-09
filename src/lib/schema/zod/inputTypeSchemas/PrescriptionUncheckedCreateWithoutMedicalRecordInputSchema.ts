import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema: z.ZodType<Prisma.PrescriptionUncheckedCreateWithoutMedicalRecordInput> =
	z
		.object({
			id: z.number().int().optional(),
			doctorId: z.string().optional().nullable(),
			patientId: z.string(),
			medicationName: z.string(),
			dosage: z.string(),
			frequency: z.string(),
			duration: z.string(),
			instructions: z.string().optional().nullable(),
			issuedDate: z.coerce.date().optional(),
			endDate: z.coerce.date().optional().nullable(),
			status: z.string().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema
