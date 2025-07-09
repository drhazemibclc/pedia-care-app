import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppointmentOrderByWithRelationInputSchema'
import { AppointmentWhereInputSchema } from '../inputTypeSchemas/AppointmentWhereInputSchema'
import { AppointmentWhereUniqueInputSchema } from '../inputTypeSchemas/AppointmentWhereUniqueInputSchema'

export const AppointmentAggregateArgsSchema: z.ZodType<Prisma.AppointmentAggregateArgs> = z
	.object({
		where: AppointmentWhereInputSchema.optional(),
		orderBy: z
			.union([
				AppointmentOrderByWithRelationInputSchema.array(),
				AppointmentOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: AppointmentWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default AppointmentAggregateArgsSchema
