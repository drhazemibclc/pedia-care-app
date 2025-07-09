import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WHOGrowthStandardUncheckedUpdateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUncheckedUpdateInputSchema'
import { WHOGrowthStandardUpdateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUpdateInputSchema'
import { WHOGrowthStandardWhereUniqueInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereUniqueInputSchema'

export const WHOGrowthStandardUpdateArgsSchema: z.ZodType<
	Omit<Prisma.WHOGrowthStandardUpdateArgs, 'select'>
> = z
	.object({
		data: z.union([
			WHOGrowthStandardUpdateInputSchema,
			WHOGrowthStandardUncheckedUpdateInputSchema,
		]),
		where: WHOGrowthStandardWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WHOGrowthStandardUpdateArgsSchema
