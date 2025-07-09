import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumGenderWithAggregatesFilterSchema } from './EnumGenderWithAggregatesFilterSchema'
import { EnumMeasurementTypeWithAggregatesFilterSchema } from './EnumMeasurementTypeWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { GenderSchema } from './GenderSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { MeasurementTypeSchema } from './MeasurementTypeSchema'

export const WHOGrowthStandardScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WHOGrowthStandardScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputSchema),
					z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputSchema),
					z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			ageInMonths: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			gender: z
				.union([z.lazy(() => EnumGenderWithAggregatesFilterSchema), z.lazy(() => GenderSchema)])
				.optional(),
			measurementType: z
				.union([
					z.lazy(() => EnumMeasurementTypeWithAggregatesFilterSchema),
					z.lazy(() => MeasurementTypeSchema),
				])
				.optional(),
			lValue: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			mValue: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sValue: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd0: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd1neg: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd1pos: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd2neg: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd2pos: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd3neg: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd3pos: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			sd4neg: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			sd4pos: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default WHOGrowthStandardScalarWhereWithAggregatesInputSchema
