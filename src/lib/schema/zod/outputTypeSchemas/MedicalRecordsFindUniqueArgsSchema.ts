import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const MedicalRecordsFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.MedicalRecordsFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: MedicalRecordsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default MedicalRecordsFindUniqueArgsSchema
