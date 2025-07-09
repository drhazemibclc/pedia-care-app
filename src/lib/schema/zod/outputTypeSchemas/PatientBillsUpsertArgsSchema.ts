import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateInputSchema } from '../inputTypeSchemas/PatientBillsCreateInputSchema'
import { PatientBillsUncheckedCreateInputSchema } from '../inputTypeSchemas/PatientBillsUncheckedCreateInputSchema'
import { PatientBillsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PatientBillsUncheckedUpdateInputSchema'
import { PatientBillsUpdateInputSchema } from '../inputTypeSchemas/PatientBillsUpdateInputSchema'
import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientBillsUpsertArgsSchema: z.ZodType<
	Omit<Prisma.PatientBillsUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientBillsWhereUniqueInputSchema,
		create: z.union([PatientBillsCreateInputSchema, PatientBillsUncheckedCreateInputSchema]),
		update: z.union([PatientBillsUpdateInputSchema, PatientBillsUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientBillsUpsertArgsSchema
