import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MedicalRecordsOrderByWithAggregationInputSchema'
import { MedicalRecordsScalarFieldEnumSchema } from '../inputTypeSchemas/MedicalRecordsScalarFieldEnumSchema'
import { MedicalRecordsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MedicalRecordsScalarWhereWithAggregatesInputSchema'
import { MedicalRecordsWhereInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereInputSchema'

export const MedicalRecordsGroupByArgsSchema: z.ZodType<Prisma.MedicalRecordsGroupByArgs> = z
	.object({
		where: MedicalRecordsWhereInputSchema.optional(),
		orderBy: z
			.union([
				MedicalRecordsOrderByWithAggregationInputSchema.array(),
				MedicalRecordsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: MedicalRecordsScalarFieldEnumSchema.array(),
		having: MedicalRecordsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default MedicalRecordsGroupByArgsSchema
