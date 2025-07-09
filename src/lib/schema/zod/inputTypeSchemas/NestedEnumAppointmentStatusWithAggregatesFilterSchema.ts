import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { NestedEnumAppointmentStatusFilterSchema } from './NestedEnumAppointmentStatusFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'

export const NestedEnumAppointmentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAppointmentStatusWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => AppointmentStatusSchema).optional(),
			in: z
				.lazy(() => AppointmentStatusSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => AppointmentStatusSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => AppointmentStatusSchema),
					z.lazy(() => NestedEnumAppointmentStatusWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumAppointmentStatusFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumAppointmentStatusFilterSchema).optional(),
		})
		.strict()

export default NestedEnumAppointmentStatusWithAggregatesFilterSchema
