import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateInputSchema } from '../inputTypeSchemas/MedicalRecordsUncheckedUpdateInputSchema'
import { MedicalRecordsUpdateInputSchema } from '../inputTypeSchemas/MedicalRecordsUpdateInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const MedicalRecordsUpdateArgsSchema: z.ZodType<
	Omit<Prisma.MedicalRecordsUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([MedicalRecordsUpdateInputSchema, MedicalRecordsUncheckedUpdateInputSchema]),
		where: MedicalRecordsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default MedicalRecordsUpdateArgsSchema
