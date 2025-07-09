import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WHOGrowthStandardOrderByWithRelationInputSchema } from '../inputTypeSchemas/WHOGrowthStandardOrderByWithRelationInputSchema'
import { WHOGrowthStandardScalarFieldEnumSchema } from '../inputTypeSchemas/WHOGrowthStandardScalarFieldEnumSchema'
import { WHOGrowthStandardWhereInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereInputSchema'
import { WHOGrowthStandardWhereUniqueInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereUniqueInputSchema'

export const WHOGrowthStandardFindFirstOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.WHOGrowthStandardFindFirstOrThrowArgs, 'select'>
> = z
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
		distinct: z
			.union([
				WHOGrowthStandardScalarFieldEnumSchema,
				WHOGrowthStandardScalarFieldEnumSchema.array(),
			])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WHOGrowthStandardFindFirstOrThrowArgsSchema
