import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedBoolNullableFilterSchema } from './NestedBoolNullableFilterSchema'
import { NestedBoolNullableWithAggregatesFilterSchema } from './NestedBoolNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.boolean().optional().nullable(),
			not: z
				.union([z.boolean(), z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
		})
		.strict()

export default BoolNullableWithAggregatesFilterSchema
