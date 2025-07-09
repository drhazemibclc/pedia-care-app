import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const RateLimitMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RateLimitMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			key: z.lazy(() => SortOrderSchema).optional(),
			count: z.lazy(() => SortOrderSchema).optional(),
			lastRequest: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default RateLimitMaxOrderByAggregateInputSchema
