import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const DoctorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DoctorOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DoctorOrderByRelationAggregateInputSchema
