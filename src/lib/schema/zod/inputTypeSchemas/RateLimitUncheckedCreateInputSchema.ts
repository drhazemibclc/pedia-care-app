import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const RateLimitUncheckedCreateInputSchema: z.ZodType<Prisma.RateLimitUncheckedCreateInput> =
	z
		.object({
			id: z.string(),
			key: z.string().optional().nullable(),
			count: z.number().int().optional().nullable(),
			lastRequest: z.bigint().optional().nullable(),
		})
		.strict()

export default RateLimitUncheckedCreateInputSchema
