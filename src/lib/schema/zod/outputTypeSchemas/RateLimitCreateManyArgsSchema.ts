import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitCreateManyInputSchema } from '../inputTypeSchemas/RateLimitCreateManyInputSchema'

export const RateLimitCreateManyArgsSchema: z.ZodType<Prisma.RateLimitCreateManyArgs> = z
	.object({
		data: z.union([RateLimitCreateManyInputSchema, RateLimitCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default RateLimitCreateManyArgsSchema
