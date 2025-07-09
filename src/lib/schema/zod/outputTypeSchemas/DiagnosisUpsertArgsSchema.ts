import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateInputSchema } from '../inputTypeSchemas/DiagnosisCreateInputSchema'
import { DiagnosisUncheckedCreateInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedCreateInputSchema'
import { DiagnosisUncheckedUpdateInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedUpdateInputSchema'
import { DiagnosisUpdateInputSchema } from '../inputTypeSchemas/DiagnosisUpdateInputSchema'
import { DiagnosisWhereUniqueInputSchema } from '../inputTypeSchemas/DiagnosisWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DiagnosisUpsertArgsSchema: z.ZodType<
	Omit<Prisma.DiagnosisUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: DiagnosisWhereUniqueInputSchema,
		create: z.union([DiagnosisCreateInputSchema, DiagnosisUncheckedCreateInputSchema]),
		update: z.union([DiagnosisUpdateInputSchema, DiagnosisUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DiagnosisUpsertArgsSchema
