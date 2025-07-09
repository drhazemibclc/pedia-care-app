import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const VitalSignsUncheckedCreateWithoutMedicalInputSchema: z.ZodType<Prisma.VitalSignsUncheckedCreateWithoutMedicalInput> =
	z
		.object({
			id: z.number().int().optional(),
			patientId: z.string(),
			bodyTemperature: z.number(),
			systolic: z.number().int(),
			diastolic: z.number().int(),
			heartRate: z.string(),
			respiratoryRate: z.number().int().optional().nullable(),
			oxygenSaturation: z.number().int().optional().nullable(),
			weight: z.number(),
			height: z.number(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default VitalSignsUncheckedCreateWithoutMedicalInputSchema
