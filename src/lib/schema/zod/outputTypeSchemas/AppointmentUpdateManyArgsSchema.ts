import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AppointmentUncheckedUpdateManyInputSchema'
import { AppointmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/AppointmentUpdateManyMutationInputSchema'
import { AppointmentWhereInputSchema } from '../inputTypeSchemas/AppointmentWhereInputSchema'

export const AppointmentUpdateManyArgsSchema: z.ZodType<Prisma.AppointmentUpdateManyArgs> = z
	.object({
		data: z.union([
			AppointmentUpdateManyMutationInputSchema,
			AppointmentUncheckedUpdateManyInputSchema,
		]),
		where: AppointmentWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default AppointmentUpdateManyArgsSchema
