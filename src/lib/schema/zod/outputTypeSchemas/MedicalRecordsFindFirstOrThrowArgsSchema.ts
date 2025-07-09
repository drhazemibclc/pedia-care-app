import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsOrderByWithRelationInputSchema } from '../inputTypeSchemas/MedicalRecordsOrderByWithRelationInputSchema'
import { MedicalRecordsScalarFieldEnumSchema } from '../inputTypeSchemas/MedicalRecordsScalarFieldEnumSchema'
import { MedicalRecordsWhereInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const MedicalRecordsFindFirstOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.MedicalRecordsFindFirstOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: MedicalRecordsWhereInputSchema.optional(),
		orderBy: z
			.union([
				MedicalRecordsOrderByWithRelationInputSchema.array(),
				MedicalRecordsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: MedicalRecordsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([MedicalRecordsScalarFieldEnumSchema, MedicalRecordsScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default MedicalRecordsFindFirstOrThrowArgsSchema
