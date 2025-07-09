import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedBigIntNullableFilterSchema } from './NestedBigIntNullableFilterSchema'
import { NestedBigIntNullableWithAggregatesFilterSchema } from './NestedBigIntNullableWithAggregatesFilterSchema'
import { NestedFloatNullableFilterSchema } from './NestedFloatNullableFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'

export const BigIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.bigint().optional().nullable(),
			in: z.bigint().array().optional().nullable(),
			notIn: z.bigint().array().optional().nullable(),
			lt: z.bigint().optional(),
			lte: z.bigint().optional(),
			gt: z.bigint().optional(),
			gte: z.bigint().optional(),
			not: z
				.union([z.bigint(), z.lazy(() => NestedBigIntNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_sum: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
		})
		.strict()

export default BigIntNullableWithAggregatesFilterSchema
