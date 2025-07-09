import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitOrderByWithRelationInputSchema } from '../inputTypeSchemas/RateLimitOrderByWithRelationInputSchema'
import { RateLimitWhereInputSchema } from '../inputTypeSchemas/RateLimitWhereInputSchema'
import { RateLimitWhereUniqueInputSchema } from '../inputTypeSchemas/RateLimitWhereUniqueInputSchema'

export const RateLimitAggregateArgsSchema: z.ZodType<Prisma.RateLimitAggregateArgs> = z
	.object({
		where: RateLimitWhereInputSchema.optional(),
		orderBy: z
			.union([
				RateLimitOrderByWithRelationInputSchema.array(),
				RateLimitOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: RateLimitWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default RateLimitAggregateArgsSchema
