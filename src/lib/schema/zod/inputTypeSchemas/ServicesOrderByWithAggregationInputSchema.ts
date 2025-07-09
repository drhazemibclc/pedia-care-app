import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesAvgOrderByAggregateInputSchema } from './ServicesAvgOrderByAggregateInputSchema'
import { ServicesCountOrderByAggregateInputSchema } from './ServicesCountOrderByAggregateInputSchema'
import { ServicesMaxOrderByAggregateInputSchema } from './ServicesMaxOrderByAggregateInputSchema'
import { ServicesMinOrderByAggregateInputSchema } from './ServicesMinOrderByAggregateInputSchema'
import { ServicesSumOrderByAggregateInputSchema } from './ServicesSumOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ServicesOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServicesOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			serviceName: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			category: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			duration: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			isAvailable: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => ServicesCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => ServicesAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => ServicesMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => ServicesMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => ServicesSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default ServicesOrderByWithAggregationInputSchema
