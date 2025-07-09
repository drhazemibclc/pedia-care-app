import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ServicesOrderByWithAggregationInputSchema'
import { ServicesScalarFieldEnumSchema } from '../inputTypeSchemas/ServicesScalarFieldEnumSchema'
import { ServicesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ServicesScalarWhereWithAggregatesInputSchema'
import { ServicesWhereInputSchema } from '../inputTypeSchemas/ServicesWhereInputSchema'

export const ServicesGroupByArgsSchema: z.ZodType<Prisma.ServicesGroupByArgs> = z
	.object({
		where: ServicesWhereInputSchema.optional(),
		orderBy: z
			.union([
				ServicesOrderByWithAggregationInputSchema.array(),
				ServicesOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: ServicesScalarFieldEnumSchema.array(),
		having: ServicesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default ServicesGroupByArgsSchema
