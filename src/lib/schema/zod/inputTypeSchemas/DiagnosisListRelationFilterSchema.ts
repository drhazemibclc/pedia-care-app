import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisWhereInputSchema } from './DiagnosisWhereInputSchema'

export const DiagnosisListRelationFilterSchema: z.ZodType<Prisma.DiagnosisListRelationFilter> = z
	.object({
		every: z.lazy(() => DiagnosisWhereInputSchema).optional(),
		some: z.lazy(() => DiagnosisWhereInputSchema).optional(),
		none: z.lazy(() => DiagnosisWhereInputSchema).optional(),
	})
	.strict()

export default DiagnosisListRelationFilterSchema
