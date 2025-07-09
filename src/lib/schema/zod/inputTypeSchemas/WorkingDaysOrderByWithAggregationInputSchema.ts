import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'
import { WorkingDaysAvgOrderByAggregateInputSchema } from './WorkingDaysAvgOrderByAggregateInputSchema'
import { WorkingDaysCountOrderByAggregateInputSchema } from './WorkingDaysCountOrderByAggregateInputSchema'
import { WorkingDaysMaxOrderByAggregateInputSchema } from './WorkingDaysMaxOrderByAggregateInputSchema'
import { WorkingDaysMinOrderByAggregateInputSchema } from './WorkingDaysMinOrderByAggregateInputSchema'
import { WorkingDaysSumOrderByAggregateInputSchema } from './WorkingDaysSumOrderByAggregateInputSchema'

export const WorkingDaysOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkingDaysOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			day: z.lazy(() => SortOrderSchema).optional(),
			startTime: z.lazy(() => SortOrderSchema).optional(),
			closeTime: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => WorkingDaysCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => WorkingDaysAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => WorkingDaysMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => WorkingDaysMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => WorkingDaysSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default WorkingDaysOrderByWithAggregationInputSchema
