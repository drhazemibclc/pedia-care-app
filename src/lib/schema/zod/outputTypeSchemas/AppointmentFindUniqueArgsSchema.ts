import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentWhereUniqueInputSchema } from '../inputTypeSchemas/AppointmentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AppointmentFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.AppointmentFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: AppointmentWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AppointmentFindUniqueArgsSchema
