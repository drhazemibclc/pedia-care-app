import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ServicesWhereUniqueInputSchema } from '../inputTypeSchemas/ServicesWhereUniqueInputSchema'

export const ServicesFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.ServicesFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: ServicesWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default ServicesFindUniqueArgsSchema
