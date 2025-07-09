import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientBillsFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.PatientBillsFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientBillsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientBillsFindUniqueOrThrowArgsSchema
