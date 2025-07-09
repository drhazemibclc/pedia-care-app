import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const DiagnosisCountOrderByAggregateInputSchema: z.ZodType<Prisma.DiagnosisCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicalId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			symptoms: z.lazy(() => SortOrderSchema).optional(),
			diagnosis: z.lazy(() => SortOrderSchema).optional(),
			notes: z.lazy(() => SortOrderSchema).optional(),
			prescribedMedications: z.lazy(() => SortOrderSchema).optional(),
			followUpPlan: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DiagnosisCountOrderByAggregateInputSchema
