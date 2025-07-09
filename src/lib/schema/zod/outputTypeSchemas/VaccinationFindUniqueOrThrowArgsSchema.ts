import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VaccinationWhereUniqueInputSchema } from '../inputTypeSchemas/VaccinationWhereUniqueInputSchema'

export const VaccinationFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.VaccinationFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: VaccinationWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VaccinationFindUniqueOrThrowArgsSchema
