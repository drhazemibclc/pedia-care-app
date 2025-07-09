import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCountOutputTypeSelectSchema } from './AppointmentCountOutputTypeSelectSchema'

export const AppointmentCountOutputTypeArgsSchema: z.ZodType<Prisma.AppointmentCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => AppointmentCountOutputTypeSelectSchema).nullish(),
		})
		.strict()

export default AppointmentCountOutputTypeSelectSchema
