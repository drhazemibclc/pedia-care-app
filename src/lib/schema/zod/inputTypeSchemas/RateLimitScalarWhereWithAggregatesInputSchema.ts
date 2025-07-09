import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { BigIntNullableWithAggregatesFilterSchema } from './BigIntNullableWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const RateLimitScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RateLimitScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => RateLimitScalarWhereWithAggregatesInputSchema),
					z.lazy(() => RateLimitScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => RateLimitScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => RateLimitScalarWhereWithAggregatesInputSchema),
					z.lazy(() => RateLimitScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			key: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			count: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			lastRequest: z
				.union([z.lazy(() => BigIntNullableWithAggregatesFilterSchema), z.bigint()])
				.optional()
				.nullable(),
		})
		.strict()

export default RateLimitScalarWhereWithAggregatesInputSchema
