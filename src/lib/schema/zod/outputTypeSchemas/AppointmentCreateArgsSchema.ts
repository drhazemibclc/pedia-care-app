import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateInputSchema } from '../inputTypeSchemas/AppointmentCreateInputSchema'
import { AppointmentUncheckedCreateInputSchema } from '../inputTypeSchemas/AppointmentUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AppointmentCreateArgsSchema: z.ZodType<
	Omit<Prisma.AppointmentCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([AppointmentCreateInputSchema, AppointmentUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AppointmentCreateArgsSchema
