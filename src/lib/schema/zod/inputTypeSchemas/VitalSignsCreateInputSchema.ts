import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateNestedOneWithoutVitalSignsInputSchema } from './MedicalRecordsCreateNestedOneWithoutVitalSignsInputSchema'

export const VitalSignsCreateInputSchema: z.ZodType<Prisma.VitalSignsCreateInput> = z
	.object({
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
		medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutVitalSignsInputSchema),
	})
	.strict()

export default VitalSignsCreateInputSchema
