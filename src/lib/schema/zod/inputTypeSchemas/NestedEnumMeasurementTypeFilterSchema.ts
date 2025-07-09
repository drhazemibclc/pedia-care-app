import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MeasurementTypeSchema } from './MeasurementTypeSchema'

export const NestedEnumMeasurementTypeFilterSchema: z.ZodType<Prisma.NestedEnumMeasurementTypeFilter> =
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
					z.lazy(() => NestedEnumMeasurementTypeFilterSchema),
				])
				.optional(),
		})
		.strict()

export default NestedEnumMeasurementTypeFilterSchema
