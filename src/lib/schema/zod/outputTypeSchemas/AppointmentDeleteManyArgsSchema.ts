import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentWhereInputSchema } from '../inputTypeSchemas/AppointmentWhereInputSchema'

export const AppointmentDeleteManyArgsSchema: z.ZodType<Prisma.AppointmentDeleteManyArgs> = z
	.object({
		where: AppointmentWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default AppointmentDeleteManyArgsSchema
