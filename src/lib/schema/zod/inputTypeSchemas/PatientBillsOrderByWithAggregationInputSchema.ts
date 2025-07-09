import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsAvgOrderByAggregateInputSchema } from './PatientBillsAvgOrderByAggregateInputSchema'
import { PatientBillsCountOrderByAggregateInputSchema } from './PatientBillsCountOrderByAggregateInputSchema'
import { PatientBillsMaxOrderByAggregateInputSchema } from './PatientBillsMaxOrderByAggregateInputSchema'
import { PatientBillsMinOrderByAggregateInputSchema } from './PatientBillsMinOrderByAggregateInputSchema'
import { PatientBillsSumOrderByAggregateInputSchema } from './PatientBillsSumOrderByAggregateInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PatientBillsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PatientBillsOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			billId: z.lazy(() => SortOrderSchema).optional(),
			serviceId: z.lazy(() => SortOrderSchema).optional(),
			serviceDate: z.lazy(() => SortOrderSchema).optional(),
			quantity: z.lazy(() => SortOrderSchema).optional(),
			unitCost: z.lazy(() => SortOrderSchema).optional(),
			totalCost: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => PatientBillsCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => PatientBillsAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => PatientBillsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => PatientBillsMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => PatientBillsSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default PatientBillsOrderByWithAggregationInputSchema
