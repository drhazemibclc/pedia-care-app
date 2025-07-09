import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const MedicalRecordsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MedicalRecordsAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			appointmentId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default MedicalRecordsAvgOrderByAggregateInputSchema
