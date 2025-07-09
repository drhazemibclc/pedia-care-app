import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PrescriptionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrescriptionAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			medicalRecordId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PrescriptionAvgOrderByAggregateInputSchema
