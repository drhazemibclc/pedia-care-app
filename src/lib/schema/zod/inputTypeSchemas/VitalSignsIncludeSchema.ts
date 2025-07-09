import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'

export const VitalSignsIncludeSchema: z.ZodType<Prisma.VitalSignsInclude> = z
	.object({
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
	})
	.strict()

export default VitalSignsIncludeSchema
