import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitCreateInputSchema } from '../inputTypeSchemas/RateLimitCreateInputSchema'
import { RateLimitUncheckedCreateInputSchema } from '../inputTypeSchemas/RateLimitUncheckedCreateInputSchema'
import { RateLimitUncheckedUpdateInputSchema } from '../inputTypeSchemas/RateLimitUncheckedUpdateInputSchema'
import { RateLimitUpdateInputSchema } from '../inputTypeSchemas/RateLimitUpdateInputSchema'
import { RateLimitWhereUniqueInputSchema } from '../inputTypeSchemas/RateLimitWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RateLimitUpsertArgsSchema: z.ZodType<Omit<Prisma.RateLimitUpsertArgs, 'select'>> = z
	.object({
		where: RateLimitWhereUniqueInputSchema,
		create: z.union([RateLimitCreateInputSchema, RateLimitUncheckedCreateInputSchema]),
		update: z.union([RateLimitUpdateInputSchema, RateLimitUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RateLimitUpsertArgsSchema
