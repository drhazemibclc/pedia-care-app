import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'

export const NestedEnumAppointmentStatusFilterSchema: z.ZodType<Prisma.NestedEnumAppointmentStatusFilter> =
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
					z.lazy(() => NestedEnumAppointmentStatusFilterSchema),
				])
				.optional(),
		})
		.strict()

export default NestedEnumAppointmentStatusFilterSchema
