import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentIncludeSchema } from '../inputTypeSchemas/AppointmentIncludeSchema'
import { AppointmentSelectSchema } from '../inputTypeSchemas/AppointmentSelectSchema'

export const AppointmentArgsSchema: z.ZodType<Prisma.AppointmentDefaultArgs> = z
	.object({
		select: z.lazy(() => AppointmentSelectSchema).optional(),
		include: z.lazy(() => AppointmentIncludeSchema).optional(),
	})
	.strict()

export default AppointmentArgsSchema
