import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { WHOGrowthStandardAvgOrderByAggregateInputSchema } from './WHOGrowthStandardAvgOrderByAggregateInputSchema'
import { WHOGrowthStandardCountOrderByAggregateInputSchema } from './WHOGrowthStandardCountOrderByAggregateInputSchema'
import { WHOGrowthStandardMaxOrderByAggregateInputSchema } from './WHOGrowthStandardMaxOrderByAggregateInputSchema'
import { WHOGrowthStandardMinOrderByAggregateInputSchema } from './WHOGrowthStandardMinOrderByAggregateInputSchema'
import { WHOGrowthStandardSumOrderByAggregateInputSchema } from './WHOGrowthStandardSumOrderByAggregateInputSchema'

export const WHOGrowthStandardOrderByWithAggregationInputSchema: z.ZodType<Prisma.WHOGrowthStandardOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			ageInMonths: z.lazy(() => SortOrderSchema).optional(),
			gender: z.lazy(() => SortOrderSchema).optional(),
			measurementType: z.lazy(() => SortOrderSchema).optional(),
			lValue: z.lazy(() => SortOrderSchema).optional(),
			mValue: z.lazy(() => SortOrderSchema).optional(),
			sValue: z.lazy(() => SortOrderSchema).optional(),
			sd0: z.lazy(() => SortOrderSchema).optional(),
			sd1neg: z.lazy(() => SortOrderSchema).optional(),
			sd1pos: z.lazy(() => SortOrderSchema).optional(),
			sd2neg: z.lazy(() => SortOrderSchema).optional(),
			sd2pos: z.lazy(() => SortOrderSchema).optional(),
			sd3neg: z.lazy(() => SortOrderSchema).optional(),
			sd3pos: z.lazy(() => SortOrderSchema).optional(),
			sd4neg: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			sd4pos: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => WHOGrowthStandardCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => WHOGrowthStandardAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => WHOGrowthStandardMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => WHOGrowthStandardMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => WHOGrowthStandardSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default WHOGrowthStandardOrderByWithAggregationInputSchema
