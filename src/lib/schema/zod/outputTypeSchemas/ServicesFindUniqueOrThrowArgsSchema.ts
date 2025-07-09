import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ServicesWhereUniqueInputSchema } from '../inputTypeSchemas/ServicesWhereUniqueInputSchema'

export const ServicesFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.ServicesFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: ServicesWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default ServicesFindUniqueOrThrowArgsSchema
