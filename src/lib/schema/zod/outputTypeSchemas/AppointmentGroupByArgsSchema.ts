import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AppointmentOrderByWithAggregationInputSchema'
import { AppointmentScalarFieldEnumSchema } from '../inputTypeSchemas/AppointmentScalarFieldEnumSchema'
import { AppointmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AppointmentScalarWhereWithAggregatesInputSchema'
import { AppointmentWhereInputSchema } from '../inputTypeSchemas/AppointmentWhereInputSchema'

export const AppointmentGroupByArgsSchema: z.ZodType<Prisma.AppointmentGroupByArgs> = z
	.object({
		where: AppointmentWhereInputSchema.optional(),
		orderBy: z
			.union([
				AppointmentOrderByWithAggregationInputSchema.array(),
				AppointmentOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: AppointmentScalarFieldEnumSchema.array(),
		having: AppointmentScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default AppointmentGroupByArgsSchema
