import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PatientOrderByWithAggregationInputSchema'
import { PatientScalarFieldEnumSchema } from '../inputTypeSchemas/PatientScalarFieldEnumSchema'
import { PatientScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PatientScalarWhereWithAggregatesInputSchema'
import { PatientWhereInputSchema } from '../inputTypeSchemas/PatientWhereInputSchema'

export const PatientGroupByArgsSchema: z.ZodType<Prisma.PatientGroupByArgs> = z
	.object({
		where: PatientWhereInputSchema.optional(),
		orderBy: z
			.union([
				PatientOrderByWithAggregationInputSchema.array(),
				PatientOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: PatientScalarFieldEnumSchema.array(),
		having: PatientScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PatientGroupByArgsSchema
