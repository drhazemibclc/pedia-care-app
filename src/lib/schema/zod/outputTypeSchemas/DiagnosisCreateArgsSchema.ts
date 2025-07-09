import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateInputSchema } from '../inputTypeSchemas/DiagnosisCreateInputSchema'
import { DiagnosisUncheckedCreateInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DiagnosisCreateArgsSchema: z.ZodType<
	Omit<Prisma.DiagnosisCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([DiagnosisCreateInputSchema, DiagnosisUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DiagnosisCreateArgsSchema
