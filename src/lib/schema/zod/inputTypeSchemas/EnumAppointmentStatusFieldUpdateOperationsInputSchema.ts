import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'

export const EnumAppointmentStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAppointmentStatusFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => AppointmentStatusSchema).optional(),
		})
		.strict()

export default EnumAppointmentStatusFieldUpdateOperationsInputSchema
