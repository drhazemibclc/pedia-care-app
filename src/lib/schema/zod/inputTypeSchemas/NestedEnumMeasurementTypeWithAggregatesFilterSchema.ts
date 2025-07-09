import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MeasurementTypeSchema } from './MeasurementTypeSchema'
import { NestedEnumMeasurementTypeFilterSchema } from './NestedEnumMeasurementTypeFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'

export const NestedEnumMeasurementTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumMeasurementTypeWithAggregatesFilter> =
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

export default NestedEnumMeasurementTypeWithAggregatesFilterSchema
