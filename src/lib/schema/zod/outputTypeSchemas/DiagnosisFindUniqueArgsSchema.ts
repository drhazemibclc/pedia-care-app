import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisWhereUniqueInputSchema } from '../inputTypeSchemas/DiagnosisWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DiagnosisFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.DiagnosisFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: DiagnosisWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DiagnosisFindUniqueArgsSchema
