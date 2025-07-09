import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'

export const VitalSignsSelectSchema: z.ZodType<Prisma.VitalSignsSelect> = z
	.object({
		id: z.boolean().optional(),
		patientId: z.boolean().optional(),
		medicalId: z.boolean().optional(),
		bodyTemperature: z.boolean().optional(),
		systolic: z.boolean().optional(),
		diastolic: z.boolean().optional(),
		heartRate: z.boolean().optional(),
		respiratoryRate: z.boolean().optional(),
		oxygenSaturation: z.boolean().optional(),
		weight: z.boolean().optional(),
		height: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
	})
	.strict()

export default VitalSignsSelectSchema
