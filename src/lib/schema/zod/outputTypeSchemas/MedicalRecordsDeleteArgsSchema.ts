import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const MedicalRecordsDeleteArgsSchema: z.ZodType<
	Omit<Prisma.MedicalRecordsDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: MedicalRecordsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default MedicalRecordsDeleteArgsSchema
