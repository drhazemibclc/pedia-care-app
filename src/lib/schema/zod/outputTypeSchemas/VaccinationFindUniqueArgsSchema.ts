import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VaccinationWhereUniqueInputSchema } from '../inputTypeSchemas/VaccinationWhereUniqueInputSchema'

export const VaccinationFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.VaccinationFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: VaccinationWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VaccinationFindUniqueArgsSchema
