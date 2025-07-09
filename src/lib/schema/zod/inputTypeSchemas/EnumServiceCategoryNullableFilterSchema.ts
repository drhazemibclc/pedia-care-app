import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumServiceCategoryNullableFilterSchema } from './NestedEnumServiceCategoryNullableFilterSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'

export const EnumServiceCategoryNullableFilterSchema: z.ZodType<Prisma.EnumServiceCategoryNullableFilter> =
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
					z.lazy(() => NestedEnumServiceCategoryNullableFilterSchema),
				])
				.optional()
				.nullable(),
		})
		.strict()

export default EnumServiceCategoryNullableFilterSchema
