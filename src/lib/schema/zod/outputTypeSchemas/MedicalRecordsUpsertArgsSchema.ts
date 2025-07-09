import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateInputSchema } from '../inputTypeSchemas/MedicalRecordsCreateInputSchema'
import { MedicalRecordsUncheckedCreateInputSchema } from '../inputTypeSchemas/MedicalRecordsUncheckedCreateInputSchema'
import { MedicalRecordsUncheckedUpdateInputSchema } from '../inputTypeSchemas/MedicalRecordsUncheckedUpdateInputSchema'
import { MedicalRecordsUpdateInputSchema } from '../inputTypeSchemas/MedicalRecordsUpdateInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const MedicalRecordsUpsertArgsSchema: z.ZodType<
	Omit<Prisma.MedicalRecordsUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: MedicalRecordsWhereUniqueInputSchema,
		create: z.union([MedicalRecordsCreateInputSchema, MedicalRecordsUncheckedCreateInputSchema]),
		update: z.union([MedicalRecordsUpdateInputSchema, MedicalRecordsUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default MedicalRecordsUpsertArgsSchema
