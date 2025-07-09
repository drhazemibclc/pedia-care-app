import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServicesOrderByWithRelationInputSchema'
import { ServicesWhereInputSchema } from '../inputTypeSchemas/ServicesWhereInputSchema'
import { ServicesWhereUniqueInputSchema } from '../inputTypeSchemas/ServicesWhereUniqueInputSchema'

export const ServicesAggregateArgsSchema: z.ZodType<Prisma.ServicesAggregateArgs> = z
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
	})
	.strict()

export default ServicesAggregateArgsSchema
