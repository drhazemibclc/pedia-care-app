import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PatientOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PatientOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PatientOrderByRelationAggregateInputSchema
