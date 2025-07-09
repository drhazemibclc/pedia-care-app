import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const RateLimitCreateManyInputSchema: z.ZodType<Prisma.RateLimitCreateManyInput> = z
	.object({
		id: z.string(),
		key: z.string().optional().nullable(),
		count: z.number().int().optional().nullable(),
		lastRequest: z.bigint().optional().nullable(),
	})
	.strict()

export default RateLimitCreateManyInputSchema
