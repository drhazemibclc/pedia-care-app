import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ServicesUncheckedUpdateInputSchema } from '../inputTypeSchemas/ServicesUncheckedUpdateInputSchema'
import { ServicesUpdateInputSchema } from '../inputTypeSchemas/ServicesUpdateInputSchema'
import { ServicesWhereUniqueInputSchema } from '../inputTypeSchemas/ServicesWhereUniqueInputSchema'

export const ServicesUpdateArgsSchema: z.ZodType<
	Omit<Prisma.ServicesUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([ServicesUpdateInputSchema, ServicesUncheckedUpdateInputSchema]),
		where: ServicesWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default ServicesUpdateArgsSchema
