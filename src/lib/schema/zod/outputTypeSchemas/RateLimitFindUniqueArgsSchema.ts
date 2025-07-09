import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitWhereUniqueInputSchema } from '../inputTypeSchemas/RateLimitWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RateLimitFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.RateLimitFindUniqueArgs, 'select'>
> = z
	.object({
		where: RateLimitWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RateLimitFindUniqueArgsSchema
