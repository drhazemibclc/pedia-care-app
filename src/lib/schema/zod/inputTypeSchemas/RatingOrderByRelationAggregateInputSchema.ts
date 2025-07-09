import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const RatingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RatingOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default RatingOrderByRelationAggregateInputSchema
