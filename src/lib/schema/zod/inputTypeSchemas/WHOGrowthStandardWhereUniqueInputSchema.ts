import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema'
import { EnumMeasurementTypeFilterSchema } from './EnumMeasurementTypeFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { GenderSchema } from './GenderSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { MeasurementTypeSchema } from './MeasurementTypeSchema'
import { WHOGrowthStandardWhereInputSchema } from './WHOGrowthStandardWhereInputSchema'

export const WHOGrowthStandardWhereUniqueInputSchema: z.ZodType<Prisma.WHOGrowthStandardWhereUniqueInput> =
	z
		.object({
			id: z.number().int(),
		})
		.and(
			z
				.object({
					id: z.number().int().optional(),
					AND: z
						.union([
							z.lazy(() => WHOGrowthStandardWhereInputSchema),
							z.lazy(() => WHOGrowthStandardWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => WHOGrowthStandardWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => WHOGrowthStandardWhereInputSchema),
							z.lazy(() => WHOGrowthStandardWhereInputSchema).array(),
						])
						.optional(),
					ageInMonths: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
					gender: z
						.union([z.lazy(() => EnumGenderFilterSchema), z.lazy(() => GenderSchema)])
						.optional(),
					measurementType: z
						.union([
							z.lazy(() => EnumMeasurementTypeFilterSchema),
							z.lazy(() => MeasurementTypeSchema),
						])
						.optional(),
					lValue: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					mValue: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sValue: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd0: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd1neg: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd1pos: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd2neg: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd2pos: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd3neg: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd3pos: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					sd4neg: z
						.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
						.optional()
						.nullable(),
					sd4pos: z
						.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
						.optional()
						.nullable(),
					createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
					updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				})
				.strict(),
		)

export default WHOGrowthStandardWhereUniqueInputSchema
