import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RateLimitUncheckedUpdateManyInputSchema'
import { RateLimitUpdateManyMutationInputSchema } from '../inputTypeSchemas/RateLimitUpdateManyMutationInputSchema'
import { RateLimitWhereInputSchema } from '../inputTypeSchemas/RateLimitWhereInputSchema'

export const RateLimitUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RateLimitUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				RateLimitUpdateManyMutationInputSchema,
				RateLimitUncheckedUpdateManyInputSchema,
			]),
			where: RateLimitWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default RateLimitUpdateManyAndReturnArgsSchema
