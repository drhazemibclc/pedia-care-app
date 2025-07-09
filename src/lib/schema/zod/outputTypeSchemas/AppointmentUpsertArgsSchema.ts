import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateInputSchema } from '../inputTypeSchemas/AppointmentCreateInputSchema'
import { AppointmentUncheckedCreateInputSchema } from '../inputTypeSchemas/AppointmentUncheckedCreateInputSchema'
import { AppointmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/AppointmentUncheckedUpdateInputSchema'
import { AppointmentUpdateInputSchema } from '../inputTypeSchemas/AppointmentUpdateInputSchema'
import { AppointmentWhereUniqueInputSchema } from '../inputTypeSchemas/AppointmentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AppointmentUpsertArgsSchema: z.ZodType<
	Omit<Prisma.AppointmentUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: AppointmentWhereUniqueInputSchema,
		create: z.union([AppointmentCreateInputSchema, AppointmentUncheckedCreateInputSchema]),
		update: z.union([AppointmentUpdateInputSchema, AppointmentUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AppointmentUpsertArgsSchema
