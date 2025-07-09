import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const MedicalRecordsCreateManyPatientInputSchema: z.ZodType<Prisma.MedicalRecordsCreateManyPatientInput> =
	z
		.object({
			id: z.number().int().optional(),
			appointmentId: z.number().int(),
			doctorId: z.string(),
			treatmentPlan: z.string().optional().nullable(),
			prescriptions: z.string().optional().nullable(),
			labRequest: z.string().optional().nullable(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default MedicalRecordsCreateManyPatientInputSchema
