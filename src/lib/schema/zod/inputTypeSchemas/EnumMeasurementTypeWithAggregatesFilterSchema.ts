import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MeasurementTypeSchema } from './MeasurementTypeSchema'
import { NestedEnumMeasurementTypeFilterSchema } from './NestedEnumMeasurementTypeFilterSchema'
import { NestedEnumMeasurementTypeWithAggregatesFilterSchema } from './NestedEnumMeasurementTypeWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'

export const EnumMeasurementTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumMeasurementTypeWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => MeasurementTypeSchema).optional(),
			in: z
				.lazy(() => MeasurementTypeSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => MeasurementTypeSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => MeasurementTypeSchema),
					z.lazy(() => NestedEnumMeasurementTypeWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumMeasurementTypeFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumMeasurementTypeFilterSchema).optional(),
		})
		.strict()

export default EnumMeasurementTypeWithAggregatesFilterSchema
