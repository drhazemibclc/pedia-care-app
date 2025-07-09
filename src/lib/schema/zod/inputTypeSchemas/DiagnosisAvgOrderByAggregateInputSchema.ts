import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const DiagnosisAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DiagnosisAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			medicalId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DiagnosisAvgOrderByAggregateInputSchema
