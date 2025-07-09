import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { NestedEnumAppointmentStatusFilterSchema } from './NestedEnumAppointmentStatusFilterSchema'
import { NestedEnumAppointmentStatusWithAggregatesFilterSchema } from './NestedEnumAppointmentStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'

export const EnumAppointmentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAppointmentStatusWithAggregatesFilter> =
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

export default EnumAppointmentStatusWithAggregatesFilterSchema
