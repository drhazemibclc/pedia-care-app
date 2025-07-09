import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DiagnosisOrderByWithAggregationInputSchema'
import { DiagnosisScalarFieldEnumSchema } from '../inputTypeSchemas/DiagnosisScalarFieldEnumSchema'
import { DiagnosisScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DiagnosisScalarWhereWithAggregatesInputSchema'
import { DiagnosisWhereInputSchema } from '../inputTypeSchemas/DiagnosisWhereInputSchema'

export const DiagnosisGroupByArgsSchema: z.ZodType<Prisma.DiagnosisGroupByArgs> = z
	.object({
		where: DiagnosisWhereInputSchema.optional(),
		orderBy: z
			.union([
				DiagnosisOrderByWithAggregationInputSchema.array(),
				DiagnosisOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: DiagnosisScalarFieldEnumSchema.array(),
		having: DiagnosisScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default DiagnosisGroupByArgsSchema
