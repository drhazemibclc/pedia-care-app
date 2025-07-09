import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientBillsOrderByWithRelationInputSchema'
import { PatientBillsScalarFieldEnumSchema } from '../inputTypeSchemas/PatientBillsScalarFieldEnumSchema'
import { PatientBillsWhereInputSchema } from '../inputTypeSchemas/PatientBillsWhereInputSchema'
import { PatientBillsWhereUniqueInputSchema } from '../inputTypeSchemas/PatientBillsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientBillsFindManyArgsSchema: z.ZodType<
	Omit<Prisma.PatientBillsFindManyArgs, 'select' | 'include'>
> = z
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
		distinct: z
			.union([PatientBillsScalarFieldEnumSchema, PatientBillsScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientBillsFindManyArgsSchema
