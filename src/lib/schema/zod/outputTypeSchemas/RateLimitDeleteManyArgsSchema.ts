import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitWhereInputSchema } from '../inputTypeSchemas/RateLimitWhereInputSchema'

export const RateLimitDeleteManyArgsSchema: z.ZodType<Prisma.RateLimitDeleteManyArgs> = z
	.object({
		where: RateLimitWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default RateLimitDeleteManyArgsSchema
