import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppointmentOrderByWithRelationInputSchema'
import { AppointmentScalarFieldEnumSchema } from '../inputTypeSchemas/AppointmentScalarFieldEnumSchema'
import { AppointmentWhereInputSchema } from '../inputTypeSchemas/AppointmentWhereInputSchema'
import { AppointmentWhereUniqueInputSchema } from '../inputTypeSchemas/AppointmentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AppointmentFindFirstArgsSchema: z.ZodType<
	Omit<Prisma.AppointmentFindFirstArgs, 'select' | 'include'>
> = z
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
		distinct: z
			.union([AppointmentScalarFieldEnumSchema, AppointmentScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AppointmentFindFirstArgsSchema
