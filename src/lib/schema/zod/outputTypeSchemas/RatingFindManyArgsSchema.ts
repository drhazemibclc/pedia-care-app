import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingOrderByWithRelationInputSchema } from '../inputTypeSchemas/RatingOrderByWithRelationInputSchema'
import { RatingScalarFieldEnumSchema } from '../inputTypeSchemas/RatingScalarFieldEnumSchema'
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema'
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RatingFindManyArgsSchema: z.ZodType<
	Omit<Prisma.RatingFindManyArgs, 'select' | 'include'>
> = z
	.object({
		where: RatingWhereInputSchema.optional(),
		orderBy: z
			.union([RatingOrderByWithRelationInputSchema.array(), RatingOrderByWithRelationInputSchema])
			.optional(),
		cursor: RatingWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([RatingScalarFieldEnumSchema, RatingScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RatingFindManyArgsSchema
