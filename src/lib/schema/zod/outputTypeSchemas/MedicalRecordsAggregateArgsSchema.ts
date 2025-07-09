import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsOrderByWithRelationInputSchema } from '../inputTypeSchemas/MedicalRecordsOrderByWithRelationInputSchema'
import { MedicalRecordsWhereInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsAggregateArgsSchema: z.ZodType<Prisma.MedicalRecordsAggregateArgs> = z
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
	})
	.strict()

export default MedicalRecordsAggregateArgsSchema
