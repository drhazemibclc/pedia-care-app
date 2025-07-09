import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WHOGrowthStandardOrderByWithRelationInputSchema } from '../inputTypeSchemas/WHOGrowthStandardOrderByWithRelationInputSchema'
import { WHOGrowthStandardWhereInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereInputSchema'
import { WHOGrowthStandardWhereUniqueInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereUniqueInputSchema'

export const WHOGrowthStandardAggregateArgsSchema: z.ZodType<Prisma.WHOGrowthStandardAggregateArgs> =
	z
		.object({
			where: WHOGrowthStandardWhereInputSchema.optional(),
			orderBy: z
				.union([
					WHOGrowthStandardOrderByWithRelationInputSchema.array(),
					WHOGrowthStandardOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: WHOGrowthStandardWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default WHOGrowthStandardAggregateArgsSchema
