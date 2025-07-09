import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PrescriptionSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrescriptionSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			medicalRecordId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PrescriptionSumOrderByAggregateInputSchema
