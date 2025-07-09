import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientBillsDeleteArgsSchema: z.ZodType<
	Omit<Prisma.PatientBillsDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientBillsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientBillsDeleteArgsSchema
