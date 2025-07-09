import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingOrderByWithRelationInputSchema } from '../inputTypeSchemas/RatingOrderByWithRelationInputSchema'
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema'
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'

export const RatingAggregateArgsSchema: z.ZodType<Prisma.RatingAggregateArgs> = z
	.object({
		where: RatingWhereInputSchema.optional(),
		orderBy: z
			.union([RatingOrderByWithRelationInputSchema.array(), RatingOrderByWithRelationInputSchema])
			.optional(),
		cursor: RatingWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default RatingAggregateArgsSchema
