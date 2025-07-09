import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyInputSchema } from '../inputTypeSchemas/AppointmentCreateManyInputSchema'

export const AppointmentCreateManyArgsSchema: z.ZodType<Prisma.AppointmentCreateManyArgs> = z
	.object({
		data: z.union([AppointmentCreateManyInputSchema, AppointmentCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default AppointmentCreateManyArgsSchema
