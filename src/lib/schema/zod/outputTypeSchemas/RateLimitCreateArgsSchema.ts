import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitCreateInputSchema } from '../inputTypeSchemas/RateLimitCreateInputSchema'
import { RateLimitUncheckedCreateInputSchema } from '../inputTypeSchemas/RateLimitUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RateLimitCreateArgsSchema: z.ZodType<Omit<Prisma.RateLimitCreateArgs, 'select'>> = z
	.object({
		data: z.union([RateLimitCreateInputSchema, RateLimitUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RateLimitCreateArgsSchema
