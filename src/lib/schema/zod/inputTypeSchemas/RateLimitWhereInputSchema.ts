import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { BigIntNullableFilterSchema } from './BigIntNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const RateLimitWhereInputSchema: z.ZodType<Prisma.RateLimitWhereInput> = z
	.object({
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
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		key: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		count: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		lastRequest: z
			.union([z.lazy(() => BigIntNullableFilterSchema), z.bigint()])
			.optional()
			.nullable(),
	})
	.strict()

export default RateLimitWhereInputSchema
