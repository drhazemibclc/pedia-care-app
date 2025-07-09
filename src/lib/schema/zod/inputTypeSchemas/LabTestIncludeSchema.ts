import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema'

export const LabTestIncludeSchema: z.ZodType<Prisma.LabTestInclude> = z
	.object({
		services: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
		medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
	})
	.strict()

export default LabTestIncludeSchema
