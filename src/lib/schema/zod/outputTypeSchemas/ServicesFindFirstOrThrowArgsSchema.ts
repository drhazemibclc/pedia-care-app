import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ServicesOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServicesOrderByWithRelationInputSchema'
import { ServicesScalarFieldEnumSchema } from '../inputTypeSchemas/ServicesScalarFieldEnumSchema'
import { ServicesWhereInputSchema } from '../inputTypeSchemas/ServicesWhereInputSchema'
import { ServicesWhereUniqueInputSchema } from '../inputTypeSchemas/ServicesWhereUniqueInputSchema'

export const ServicesFindFirstOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.ServicesFindFirstOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: ServicesWhereInputSchema.optional(),
		orderBy: z
			.union([
				ServicesOrderByWithRelationInputSchema.array(),
				ServicesOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: ServicesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([ServicesScalarFieldEnumSchema, ServicesScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default ServicesFindFirstOrThrowArgsSchema
