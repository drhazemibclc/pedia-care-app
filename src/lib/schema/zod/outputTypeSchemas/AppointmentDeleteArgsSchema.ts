import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentWhereUniqueInputSchema } from '../inputTypeSchemas/AppointmentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AppointmentDeleteArgsSchema: z.ZodType<
	Omit<Prisma.AppointmentDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: AppointmentWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AppointmentDeleteArgsSchema
