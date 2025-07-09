import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RateLimitAvgOrderByAggregateInputSchema } from './RateLimitAvgOrderByAggregateInputSchema'
import { RateLimitCountOrderByAggregateInputSchema } from './RateLimitCountOrderByAggregateInputSchema'
import { RateLimitMaxOrderByAggregateInputSchema } from './RateLimitMaxOrderByAggregateInputSchema'
import { RateLimitMinOrderByAggregateInputSchema } from './RateLimitMinOrderByAggregateInputSchema'
import { RateLimitSumOrderByAggregateInputSchema } from './RateLimitSumOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const RateLimitOrderByWithAggregationInputSchema: z.ZodType<Prisma.RateLimitOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			key: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			count: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			lastRequest: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			_count: z.lazy(() => RateLimitCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => RateLimitAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => RateLimitMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => RateLimitMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => RateLimitSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default RateLimitOrderByWithAggregationInputSchema
