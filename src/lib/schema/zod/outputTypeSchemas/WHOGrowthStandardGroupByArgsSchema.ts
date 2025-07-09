import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WHOGrowthStandardOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WHOGrowthStandardOrderByWithAggregationInputSchema'
import { WHOGrowthStandardScalarFieldEnumSchema } from '../inputTypeSchemas/WHOGrowthStandardScalarFieldEnumSchema'
import { WHOGrowthStandardScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WHOGrowthStandardScalarWhereWithAggregatesInputSchema'
import { WHOGrowthStandardWhereInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereInputSchema'

export const WHOGrowthStandardGroupByArgsSchema: z.ZodType<Prisma.WHOGrowthStandardGroupByArgs> = z
	.object({
		where: WHOGrowthStandardWhereInputSchema.optional(),
		orderBy: z
			.union([
				WHOGrowthStandardOrderByWithAggregationInputSchema.array(),
				WHOGrowthStandardOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: WHOGrowthStandardScalarFieldEnumSchema.array(),
		having: WHOGrowthStandardScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default WHOGrowthStandardGroupByArgsSchema
