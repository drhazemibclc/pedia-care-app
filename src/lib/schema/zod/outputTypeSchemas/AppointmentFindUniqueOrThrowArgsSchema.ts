import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentWhereUniqueInputSchema } from '../inputTypeSchemas/AppointmentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AppointmentFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.AppointmentFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: AppointmentWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AppointmentFindUniqueOrThrowArgsSchema
