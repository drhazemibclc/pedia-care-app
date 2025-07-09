import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WHOGrowthStandardWhereUniqueInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereUniqueInputSchema'

export const WHOGrowthStandardDeleteArgsSchema: z.ZodType<
	Omit<Prisma.WHOGrowthStandardDeleteArgs, 'select'>
> = z
	.object({
		where: WHOGrowthStandardWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WHOGrowthStandardDeleteArgsSchema
