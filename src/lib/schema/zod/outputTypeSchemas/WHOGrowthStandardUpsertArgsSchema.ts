import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WHOGrowthStandardCreateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardCreateInputSchema'
import { WHOGrowthStandardUncheckedCreateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUncheckedCreateInputSchema'
import { WHOGrowthStandardUncheckedUpdateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUncheckedUpdateInputSchema'
import { WHOGrowthStandardUpdateInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUpdateInputSchema'
import { WHOGrowthStandardWhereUniqueInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereUniqueInputSchema'

export const WHOGrowthStandardUpsertArgsSchema: z.ZodType<
	Omit<Prisma.WHOGrowthStandardUpsertArgs, 'select'>
> = z
	.object({
		where: WHOGrowthStandardWhereUniqueInputSchema,
		create: z.union([
			WHOGrowthStandardCreateInputSchema,
			WHOGrowthStandardUncheckedCreateInputSchema,
		]),
		update: z.union([
			WHOGrowthStandardUpdateInputSchema,
			WHOGrowthStandardUncheckedUpdateInputSchema,
		]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WHOGrowthStandardUpsertArgsSchema
