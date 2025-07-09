import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const DiagnosisCreateManyMedicalInputSchema: z.ZodType<Prisma.DiagnosisCreateManyMedicalInput> =
	z
		.object({
			id: z.number().int().optional(),
			patientId: z.string(),
			doctorId: z.string(),
			symptoms: z.string(),
			diagnosis: z.string(),
			notes: z.string().optional().nullable(),
			prescribedMedications: z.string().optional().nullable(),
			followUpPlan: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default DiagnosisCreateManyMedicalInputSchema
