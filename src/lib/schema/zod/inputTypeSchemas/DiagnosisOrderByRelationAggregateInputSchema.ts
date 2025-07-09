import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const DiagnosisOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DiagnosisOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DiagnosisOrderByRelationAggregateInputSchema
