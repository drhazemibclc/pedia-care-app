import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/AppointmentUncheckedUpdateInputSchema'
import { AppointmentUpdateInputSchema } from '../inputTypeSchemas/AppointmentUpdateInputSchema'
import { AppointmentWhereUniqueInputSchema } from '../inputTypeSchemas/AppointmentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AppointmentUpdateArgsSchema: z.ZodType<
	Omit<Prisma.AppointmentUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([AppointmentUpdateInputSchema, AppointmentUncheckedUpdateInputSchema]),
		where: AppointmentWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AppointmentUpdateArgsSchema
