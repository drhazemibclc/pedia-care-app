import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RatingOrderByWithAggregationInputSchema'
import { RatingScalarFieldEnumSchema } from '../inputTypeSchemas/RatingScalarFieldEnumSchema'
import { RatingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RatingScalarWhereWithAggregatesInputSchema'
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema'

export const RatingGroupByArgsSchema: z.ZodType<Prisma.RatingGroupByArgs> = z
	.object({
		where: RatingWhereInputSchema.optional(),
		orderBy: z
			.union([
				RatingOrderByWithAggregationInputSchema.array(),
				RatingOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: RatingScalarFieldEnumSchema.array(),
		having: RatingScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default RatingGroupByArgsSchema
