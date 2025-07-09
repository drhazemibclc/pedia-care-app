import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AppointmentUncheckedUpdateManyInputSchema'
import { AppointmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/AppointmentUpdateManyMutationInputSchema'
import { AppointmentWhereInputSchema } from '../inputTypeSchemas/AppointmentWhereInputSchema'

export const AppointmentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AppointmentUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				AppointmentUpdateManyMutationInputSchema,
				AppointmentUncheckedUpdateManyInputSchema,
			]),
			where: AppointmentWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default AppointmentUpdateManyAndReturnArgsSchema
