import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { BigIntNullableFilterSchema } from './BigIntNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { RateLimitWhereInputSchema } from './RateLimitWhereInputSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const RateLimitWhereUniqueInputSchema: z.ZodType<Prisma.RateLimitWhereUniqueInput> = z
	.object({
		id: z.string(),
	})
	.and(
		z
			.object({
				id: z.string().optional(),
				AND: z
					.union([
						z.lazy(() => RateLimitWhereInputSchema),
						z.lazy(() => RateLimitWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => RateLimitWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => RateLimitWhereInputSchema),
						z.lazy(() => RateLimitWhereInputSchema).array(),
					])
					.optional(),
				key: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				count: z
					.union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
					.optional()
					.nullable(),
				lastRequest: z
					.union([z.lazy(() => BigIntNullableFilterSchema), z.bigint()])
					.optional()
					.nullable(),
			})
			.strict(),
	)

export default RateLimitWhereUniqueInputSchema
