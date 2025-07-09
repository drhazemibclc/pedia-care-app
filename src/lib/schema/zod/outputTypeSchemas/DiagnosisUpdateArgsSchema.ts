import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedUpdateInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedUpdateInputSchema'
import { DiagnosisUpdateInputSchema } from '../inputTypeSchemas/DiagnosisUpdateInputSchema'
import { DiagnosisWhereUniqueInputSchema } from '../inputTypeSchemas/DiagnosisWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DiagnosisUpdateArgsSchema: z.ZodType<
	Omit<Prisma.DiagnosisUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([DiagnosisUpdateInputSchema, DiagnosisUncheckedUpdateInputSchema]),
		where: DiagnosisWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DiagnosisUpdateArgsSchema
