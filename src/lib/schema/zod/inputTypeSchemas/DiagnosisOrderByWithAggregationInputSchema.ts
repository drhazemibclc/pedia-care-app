import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisAvgOrderByAggregateInputSchema } from './DiagnosisAvgOrderByAggregateInputSchema'
import { DiagnosisCountOrderByAggregateInputSchema } from './DiagnosisCountOrderByAggregateInputSchema'
import { DiagnosisMaxOrderByAggregateInputSchema } from './DiagnosisMaxOrderByAggregateInputSchema'
import { DiagnosisMinOrderByAggregateInputSchema } from './DiagnosisMinOrderByAggregateInputSchema'
import { DiagnosisSumOrderByAggregateInputSchema } from './DiagnosisSumOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const DiagnosisOrderByWithAggregationInputSchema: z.ZodType<Prisma.DiagnosisOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicalId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			symptoms: z.lazy(() => SortOrderSchema).optional(),
			diagnosis: z.lazy(() => SortOrderSchema).optional(),
			notes: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			prescribedMedications: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			followUpPlan: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => DiagnosisCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => DiagnosisAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => DiagnosisMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => DiagnosisMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => DiagnosisSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default DiagnosisOrderByWithAggregationInputSchema
