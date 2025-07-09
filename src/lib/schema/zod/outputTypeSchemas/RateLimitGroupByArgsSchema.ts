import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RateLimitOrderByWithAggregationInputSchema'
import { RateLimitScalarFieldEnumSchema } from '../inputTypeSchemas/RateLimitScalarFieldEnumSchema'
import { RateLimitScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RateLimitScalarWhereWithAggregatesInputSchema'
import { RateLimitWhereInputSchema } from '../inputTypeSchemas/RateLimitWhereInputSchema'

export const RateLimitGroupByArgsSchema: z.ZodType<Prisma.RateLimitGroupByArgs> = z
	.object({
		where: RateLimitWhereInputSchema.optional(),
		orderBy: z
			.union([
				RateLimitOrderByWithAggregationInputSchema.array(),
				RateLimitOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: RateLimitScalarFieldEnumSchema.array(),
		having: RateLimitScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default RateLimitGroupByArgsSchema
