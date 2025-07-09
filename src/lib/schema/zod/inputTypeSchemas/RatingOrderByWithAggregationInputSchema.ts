import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingAvgOrderByAggregateInputSchema } from './RatingAvgOrderByAggregateInputSchema'
import { RatingCountOrderByAggregateInputSchema } from './RatingCountOrderByAggregateInputSchema'
import { RatingMaxOrderByAggregateInputSchema } from './RatingMaxOrderByAggregateInputSchema'
import { RatingMinOrderByAggregateInputSchema } from './RatingMinOrderByAggregateInputSchema'
import { RatingSumOrderByAggregateInputSchema } from './RatingSumOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const RatingOrderByWithAggregationInputSchema: z.ZodType<Prisma.RatingOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			staffId: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			rating: z.lazy(() => SortOrderSchema).optional(),
			comment: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => RatingCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => RatingAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => RatingMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => RatingMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => RatingSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default RatingOrderByWithAggregationInputSchema
