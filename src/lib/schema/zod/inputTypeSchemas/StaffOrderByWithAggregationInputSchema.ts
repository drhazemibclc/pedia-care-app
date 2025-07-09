import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { StaffAvgOrderByAggregateInputSchema } from './StaffAvgOrderByAggregateInputSchema'
import { StaffCountOrderByAggregateInputSchema } from './StaffCountOrderByAggregateInputSchema'
import { StaffMaxOrderByAggregateInputSchema } from './StaffMaxOrderByAggregateInputSchema'
import { StaffMinOrderByAggregateInputSchema } from './StaffMinOrderByAggregateInputSchema'
import { StaffSumOrderByAggregateInputSchema } from './StaffSumOrderByAggregateInputSchema'

export const StaffOrderByWithAggregationInputSchema: z.ZodType<Prisma.StaffOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			phone: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			address: z.lazy(() => SortOrderSchema).optional(),
			department: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			img: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			licenseNumber: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			colorCode: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			hireDate: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			salary: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			role: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => StaffCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => StaffAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => StaffMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => StaffMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => StaffSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default StaffOrderByWithAggregationInputSchema
