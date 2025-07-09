import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitUncheckedUpdateInputSchema } from '../inputTypeSchemas/RateLimitUncheckedUpdateInputSchema'
import { RateLimitUpdateInputSchema } from '../inputTypeSchemas/RateLimitUpdateInputSchema'
import { RateLimitWhereUniqueInputSchema } from '../inputTypeSchemas/RateLimitWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RateLimitUpdateArgsSchema: z.ZodType<Omit<Prisma.RateLimitUpdateArgs, 'select'>> = z
	.object({
		data: z.union([RateLimitUpdateInputSchema, RateLimitUncheckedUpdateInputSchema]),
		where: RateLimitWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RateLimitUpdateArgsSchema
