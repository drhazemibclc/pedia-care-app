import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const VitalSignsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VitalSignsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => VitalSignsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => VitalSignsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => VitalSignsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => VitalSignsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => VitalSignsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			patientId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			medicalId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			bodyTemperature: z
				.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()])
				.optional(),
			systolic: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			diastolic: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			heartRate: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			respiratoryRate: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			oxygenSaturation: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			weight: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			height: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default VitalSignsScalarWhereWithAggregatesInputSchema
