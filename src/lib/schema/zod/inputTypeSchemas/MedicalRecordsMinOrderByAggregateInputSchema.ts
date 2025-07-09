import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const MedicalRecordsMinOrderByAggregateInputSchema: z.ZodType<Prisma.MedicalRecordsMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			appointmentId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			treatmentPlan: z.lazy(() => SortOrderSchema).optional(),
			prescriptions: z.lazy(() => SortOrderSchema).optional(),
			labRequest: z.lazy(() => SortOrderSchema).optional(),
			notes: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default MedicalRecordsMinOrderByAggregateInputSchema
