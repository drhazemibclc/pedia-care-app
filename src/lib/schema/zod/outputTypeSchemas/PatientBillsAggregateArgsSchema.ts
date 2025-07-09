import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientBillsOrderByWithRelationInputSchema'
import { PatientBillsWhereInputSchema } from '../inputTypeSchemas/PatientBillsWhereInputSchema'
import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema'

export const PatientBillsAggregateArgsSchema: z.ZodType<Prisma.PatientBillsAggregateArgs> = z
	.object({
		where: PatientBillsWhereInputSchema.optional(),
		orderBy: z
			.union([
				PatientBillsOrderByWithRelationInputSchema.array(),
				PatientBillsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: PatientBillsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PatientBillsAggregateArgsSchema
