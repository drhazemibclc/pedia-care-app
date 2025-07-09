import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const AppointmentCountOutputTypeSelectSchema: z.ZodType<Prisma.AppointmentCountOutputTypeSelect> =
	z
		.object({
			bills: z.boolean().optional(),
			medical: z.boolean().optional(),
		})
		.strict()

export default AppointmentCountOutputTypeSelectSchema
