import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsAvgOrderByAggregateInputSchema } from './MedicalRecordsAvgOrderByAggregateInputSchema'
import { MedicalRecordsCountOrderByAggregateInputSchema } from './MedicalRecordsCountOrderByAggregateInputSchema'
import { MedicalRecordsMaxOrderByAggregateInputSchema } from './MedicalRecordsMaxOrderByAggregateInputSchema'
import { MedicalRecordsMinOrderByAggregateInputSchema } from './MedicalRecordsMinOrderByAggregateInputSchema'
import { MedicalRecordsSumOrderByAggregateInputSchema } from './MedicalRecordsSumOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const MedicalRecordsOrderByWithAggregationInputSchema: z.ZodType<Prisma.MedicalRecordsOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			appointmentId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			treatmentPlan: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			prescriptions: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			labRequest: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			notes: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => MedicalRecordsCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => MedicalRecordsAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => MedicalRecordsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => MedicalRecordsMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => MedicalRecordsSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsOrderByWithAggregationInputSchema
