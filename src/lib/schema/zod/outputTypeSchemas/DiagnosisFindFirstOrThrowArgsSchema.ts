import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisOrderByWithRelationInputSchema } from '../inputTypeSchemas/DiagnosisOrderByWithRelationInputSchema'
import { DiagnosisScalarFieldEnumSchema } from '../inputTypeSchemas/DiagnosisScalarFieldEnumSchema'
import { DiagnosisWhereInputSchema } from '../inputTypeSchemas/DiagnosisWhereInputSchema'
import { DiagnosisWhereUniqueInputSchema } from '../inputTypeSchemas/DiagnosisWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DiagnosisFindFirstOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.DiagnosisFindFirstOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: DiagnosisWhereInputSchema.optional(),
		orderBy: z
			.union([
				DiagnosisOrderByWithRelationInputSchema.array(),
				DiagnosisOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: DiagnosisWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([DiagnosisScalarFieldEnumSchema, DiagnosisScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DiagnosisFindFirstOrThrowArgsSchema
