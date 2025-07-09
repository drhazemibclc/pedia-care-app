import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PatientBillsOrderByWithAggregationInputSchema'
import { PatientBillsScalarFieldEnumSchema } from '../inputTypeSchemas/PatientBillsScalarFieldEnumSchema'
import { PatientBillsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PatientBillsScalarWhereWithAggregatesInputSchema'
import { PatientBillsWhereInputSchema } from '../inputTypeSchemas/PatientBillsWhereInputSchema'

export const PatientBillsGroupByArgsSchema: z.ZodType<Prisma.PatientBillsGroupByArgs> = z
	.object({
		where: PatientBillsWhereInputSchema.optional(),
		orderBy: z
			.union([
				PatientBillsOrderByWithAggregationInputSchema.array(),
				PatientBillsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: PatientBillsScalarFieldEnumSchema.array(),
		having: PatientBillsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PatientBillsGroupByArgsSchema
