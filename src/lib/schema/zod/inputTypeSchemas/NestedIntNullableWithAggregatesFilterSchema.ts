import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedFloatNullableFilterSchema } from './NestedFloatNullableFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.number().optional().nullable(),
			in: z.number().array().optional().nullable(),
			notIn: z.number().array().optional().nullable(),
			lt: z.number().optional(),
			lte: z.number().optional(),
			gt: z.number().optional(),
			gte: z.number().optional(),
			not: z
				.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
		})
		.strict()

export default NestedIntNullableWithAggregatesFilterSchema
