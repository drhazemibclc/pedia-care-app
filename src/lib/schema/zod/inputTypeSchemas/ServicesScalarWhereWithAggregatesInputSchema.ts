import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumServiceCategoryNullableWithAggregatesFilterSchema } from './EnumServiceCategoryNullableWithAggregatesFilterSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const ServicesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServicesScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => ServicesScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => ServicesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			serviceName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			price: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			category: z
				.union([
					z.lazy(() => EnumServiceCategoryNullableWithAggregatesFilterSchema),
					z.lazy(() => ServiceCategorySchema),
				])
				.optional()
				.nullable(),
			duration: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			isAvailable: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default ServicesScalarWhereWithAggregatesInputSchema
