import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WHOGrowthStandardWhereUniqueInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereUniqueInputSchema'

export const WHOGrowthStandardFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.WHOGrowthStandardFindUniqueArgs, 'select'>
> = z
	.object({
		where: WHOGrowthStandardWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WHOGrowthStandardFindUniqueArgsSchema
