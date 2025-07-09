import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitCreateManyInputSchema } from '../inputTypeSchemas/RateLimitCreateManyInputSchema'

export const RateLimitCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RateLimitCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([RateLimitCreateManyInputSchema, RateLimitCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default RateLimitCreateManyAndReturnArgsSchema
