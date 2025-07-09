import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisOrderByWithRelationInputSchema } from '../inputTypeSchemas/DiagnosisOrderByWithRelationInputSchema'
import { DiagnosisWhereInputSchema } from '../inputTypeSchemas/DiagnosisWhereInputSchema'
import { DiagnosisWhereUniqueInputSchema } from '../inputTypeSchemas/DiagnosisWhereUniqueInputSchema'

export const DiagnosisAggregateArgsSchema: z.ZodType<Prisma.DiagnosisAggregateArgs> = z
	.object({
		where: DiagnosisWhereInputSchema.optional(),
		orderBy: z
			.union([
				DiagnosisOrderByWithRelationInputSchema.array(),
				DiagnosisOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: DiagnosisWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default DiagnosisAggregateArgsSchema
