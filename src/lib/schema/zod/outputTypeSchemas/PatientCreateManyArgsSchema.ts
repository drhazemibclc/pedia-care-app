import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateManyInputSchema } from '../inputTypeSchemas/PatientCreateManyInputSchema'

export const PatientCreateManyArgsSchema: z.ZodType<Prisma.PatientCreateManyArgs> = z
	.object({
		data: z.union([PatientCreateManyInputSchema, PatientCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default PatientCreateManyArgsSchema
