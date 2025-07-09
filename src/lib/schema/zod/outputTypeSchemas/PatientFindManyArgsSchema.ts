import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientOrderByWithRelationInputSchema'
import { PatientScalarFieldEnumSchema } from '../inputTypeSchemas/PatientScalarFieldEnumSchema'
import { PatientWhereInputSchema } from '../inputTypeSchemas/PatientWhereInputSchema'
import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientFindManyArgsSchema: z.ZodType<
	Omit<Prisma.PatientFindManyArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientWhereInputSchema.optional(),
		orderBy: z
			.union([PatientOrderByWithRelationInputSchema.array(), PatientOrderByWithRelationInputSchema])
			.optional(),
		cursor: PatientWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([PatientScalarFieldEnumSchema, PatientScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientFindManyArgsSchema
