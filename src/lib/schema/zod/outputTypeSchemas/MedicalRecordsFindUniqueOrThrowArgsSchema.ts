import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const MedicalRecordsFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.MedicalRecordsFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: MedicalRecordsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default MedicalRecordsFindUniqueOrThrowArgsSchema
