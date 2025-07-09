import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisWhereInputSchema } from '../inputTypeSchemas/DiagnosisWhereInputSchema'

export const DiagnosisDeleteManyArgsSchema: z.ZodType<Prisma.DiagnosisDeleteManyArgs> = z
	.object({
		where: DiagnosisWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default DiagnosisDeleteManyArgsSchema
