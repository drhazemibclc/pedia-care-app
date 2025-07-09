import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const RateLimitSumOrderByAggregateInputSchema: z.ZodType<Prisma.RateLimitSumOrderByAggregateInput> =
	z
		.object({
			count: z.lazy(() => SortOrderSchema).optional(),
			lastRequest: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default RateLimitSumOrderByAggregateInputSchema
