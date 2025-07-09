import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateInputSchema } from '../inputTypeSchemas/PatientBillsCreateInputSchema'
import { PatientBillsUncheckedCreateInputSchema } from '../inputTypeSchemas/PatientBillsUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientBillsCreateArgsSchema: z.ZodType<
	Omit<Prisma.PatientBillsCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PatientBillsCreateInputSchema, PatientBillsUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientBillsCreateArgsSchema
