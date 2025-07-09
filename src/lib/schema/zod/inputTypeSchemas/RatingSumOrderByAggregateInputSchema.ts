import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const RatingSumOrderByAggregateInputSchema: z.ZodType<Prisma.RatingSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			rating: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default RatingSumOrderByAggregateInputSchema
