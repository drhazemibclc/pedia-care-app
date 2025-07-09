import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyInputSchema } from '../inputTypeSchemas/DiagnosisCreateManyInputSchema'

export const DiagnosisCreateManyArgsSchema: z.ZodType<Prisma.DiagnosisCreateManyArgs> = z
	.object({
		data: z.union([DiagnosisCreateManyInputSchema, DiagnosisCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default DiagnosisCreateManyArgsSchema
