import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema'

export const LabTestSelectSchema: z.ZodType<Prisma.LabTestSelect> = z
	.object({
		id: z.boolean().optional(),
		recordId: z.boolean().optional(),
		testDate: z.boolean().optional(),
		result: z.boolean().optional(),
		status: z.boolean().optional(),
		notes: z.boolean().optional(),
		serviceId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		services: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
		medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
	})
	.strict()

export default LabTestSelectSchema
