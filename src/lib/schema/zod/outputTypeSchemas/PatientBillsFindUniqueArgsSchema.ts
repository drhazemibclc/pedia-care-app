import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientBillsFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.PatientBillsFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientBillsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientBillsFindUniqueArgsSchema
