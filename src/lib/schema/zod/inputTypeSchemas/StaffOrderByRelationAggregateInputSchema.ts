import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const StaffOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StaffOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default StaffOrderByRelationAggregateInputSchema
