import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedStringNullableFilterSchema } from './NestedStringNullableFilterSchema'
import { NestedStringNullableWithAggregatesFilterSchema } from './NestedStringNullableWithAggregatesFilterSchema'
import { QueryModeSchema } from './QueryModeSchema'

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.string().optional().nullable(),
			in: z.string().array().optional().nullable(),
			notIn: z.string().array().optional().nullable(),
			lt: z.string().optional(),
			lte: z.string().optional(),
			gt: z.string().optional(),
			gte: z.string().optional(),
			contains: z.string().optional(),
			startsWith: z.string().optional(),
			endsWith: z.string().optional(),
			mode: z.lazy(() => QueryModeSchema).optional(),
			not: z
				.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
		})
		.strict()

export default StringNullableWithAggregatesFilterSchema
