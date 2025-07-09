import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumServiceCategoryNullableFilterSchema } from './NestedEnumServiceCategoryNullableFilterSchema'
import { NestedEnumServiceCategoryNullableWithAggregatesFilterSchema } from './NestedEnumServiceCategoryNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'

export const EnumServiceCategoryNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumServiceCategoryNullableWithAggregatesFilter> =
	z
		.object({
			equals: z
				.lazy(() => ServiceCategorySchema)
				.optional()
				.nullable(),
			in: z
				.lazy(() => ServiceCategorySchema)
				.array()
				.optional()
				.nullable(),
			notIn: z
				.lazy(() => ServiceCategorySchema)
				.array()
				.optional()
				.nullable(),
			not: z
				.union([
					z.lazy(() => ServiceCategorySchema),
					z.lazy(() => NestedEnumServiceCategoryNullableWithAggregatesFilterSchema),
				])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumServiceCategoryNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumServiceCategoryNullableFilterSchema).optional(),
		})
		.strict()

export default EnumServiceCategoryNullableWithAggregatesFilterSchema
