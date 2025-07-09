import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateInputSchema } from '../inputTypeSchemas/MedicalRecordsCreateInputSchema'
import { MedicalRecordsUncheckedCreateInputSchema } from '../inputTypeSchemas/MedicalRecordsUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const MedicalRecordsCreateArgsSchema: z.ZodType<
	Omit<Prisma.MedicalRecordsCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([MedicalRecordsCreateInputSchema, MedicalRecordsUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default MedicalRecordsCreateArgsSchema
