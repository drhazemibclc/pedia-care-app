import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const VitalSignsCreateManyInputSchema: z.ZodType<Prisma.VitalSignsCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		patientId: z.string(),
		medicalId: z.number().int(),
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

export default VitalSignsCreateManyInputSchema
