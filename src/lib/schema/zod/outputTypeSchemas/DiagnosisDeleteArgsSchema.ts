import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisWhereUniqueInputSchema } from '../inputTypeSchemas/DiagnosisWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DiagnosisDeleteArgsSchema: z.ZodType<
	Omit<Prisma.DiagnosisDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: DiagnosisWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DiagnosisDeleteArgsSchema
