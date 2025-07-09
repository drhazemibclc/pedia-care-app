import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PrescriptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrescriptionMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			medicalRecordId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicationName: z.lazy(() => SortOrderSchema).optional(),
			dosage: z.lazy(() => SortOrderSchema).optional(),
			frequency: z.lazy(() => SortOrderSchema).optional(),
			duration: z.lazy(() => SortOrderSchema).optional(),
			instructions: z.lazy(() => SortOrderSchema).optional(),
			issuedDate: z.lazy(() => SortOrderSchema).optional(),
			endDate: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PrescriptionMaxOrderByAggregateInputSchema
