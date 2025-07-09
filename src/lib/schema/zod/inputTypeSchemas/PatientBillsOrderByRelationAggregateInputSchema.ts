import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PatientBillsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PatientBillsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PatientBillsOrderByRelationAggregateInputSchema
