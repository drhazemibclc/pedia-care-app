import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitOrderByWithRelationInputSchema } from '../inputTypeSchemas/RateLimitOrderByWithRelationInputSchema'
import { RateLimitScalarFieldEnumSchema } from '../inputTypeSchemas/RateLimitScalarFieldEnumSchema'
import { RateLimitWhereInputSchema } from '../inputTypeSchemas/RateLimitWhereInputSchema'
import { RateLimitWhereUniqueInputSchema } from '../inputTypeSchemas/RateLimitWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RateLimitFindFirstArgsSchema: z.ZodType<
	Omit<Prisma.RateLimitFindFirstArgs, 'select'>
> = z
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
		distinct: z
			.union([RateLimitScalarFieldEnumSchema, RateLimitScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RateLimitFindFirstArgsSchema
