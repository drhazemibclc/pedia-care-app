import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const RateLimitSelectSchema: z.ZodType<Prisma.RateLimitSelect> = z
	.object({
		id: z.boolean().optional(),
		key: z.boolean().optional(),
		count: z.boolean().optional(),
		lastRequest: z.boolean().optional(),
	})
	.strict()

export default RateLimitSelectSchema
