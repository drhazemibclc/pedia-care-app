import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionAvgOrderByAggregateInputSchema } from './PrescriptionAvgOrderByAggregateInputSchema'
import { PrescriptionCountOrderByAggregateInputSchema } from './PrescriptionCountOrderByAggregateInputSchema'
import { PrescriptionMaxOrderByAggregateInputSchema } from './PrescriptionMaxOrderByAggregateInputSchema'
import { PrescriptionMinOrderByAggregateInputSchema } from './PrescriptionMinOrderByAggregateInputSchema'
import { PrescriptionSumOrderByAggregateInputSchema } from './PrescriptionSumOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PrescriptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrescriptionOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			medicalRecordId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicationName: z.lazy(() => SortOrderSchema).optional(),
			dosage: z.lazy(() => SortOrderSchema).optional(),
			frequency: z.lazy(() => SortOrderSchema).optional(),
			duration: z.lazy(() => SortOrderSchema).optional(),
			instructions: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			issuedDate: z.lazy(() => SortOrderSchema).optional(),
			endDate: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => PrescriptionCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => PrescriptionAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => PrescriptionMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => PrescriptionMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => PrescriptionSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default PrescriptionOrderByWithAggregationInputSchema
