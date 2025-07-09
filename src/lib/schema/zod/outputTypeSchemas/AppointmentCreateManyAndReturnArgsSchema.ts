import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyInputSchema } from '../inputTypeSchemas/AppointmentCreateManyInputSchema'

export const AppointmentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AppointmentCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([AppointmentCreateManyInputSchema, AppointmentCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default AppointmentCreateManyAndReturnArgsSchema
