import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WHOGrowthStandardCreateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardCreateInputSchema'
import { WHOGrowthStandardUncheckedCreateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUncheckedCreateInputSchema'

export const WHOGrowthStandardCreateArgsSchema: z.ZodType<
	Omit<Prisma.WHOGrowthStandardCreateArgs, 'select'>
> = z
	.object({
		data: z.union([
			WHOGrowthStandardCreateInputSchema,
			WHOGrowthStandardUncheckedCreateInputSchema,
		]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WHOGrowthStandardCreateArgsSchema
