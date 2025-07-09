import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PatientBillsUncheckedUpdateInputSchema'
import { PatientBillsUpdateInputSchema } from '../inputTypeSchemas/PatientBillsUpdateInputSchema'
import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientBillsUpdateArgsSchema: z.ZodType<
	Omit<Prisma.PatientBillsUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PatientBillsUpdateInputSchema, PatientBillsUncheckedUpdateInputSchema]),
		where: PatientBillsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientBillsUpdateArgsSchema
