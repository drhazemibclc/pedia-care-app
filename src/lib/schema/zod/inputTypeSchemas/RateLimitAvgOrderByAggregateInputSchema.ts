import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const RateLimitAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RateLimitAvgOrderByAggregateInput> =
	z
		.object({
			count: z.lazy(() => SortOrderSchema).optional(),
			lastRequest: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default RateLimitAvgOrderByAggregateInputSchema
