import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PrescriptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrescriptionOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PrescriptionOrderByRelationAggregateInputSchema
