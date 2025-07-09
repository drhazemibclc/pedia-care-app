import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.PatientFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientFindUniqueArgsSchema
