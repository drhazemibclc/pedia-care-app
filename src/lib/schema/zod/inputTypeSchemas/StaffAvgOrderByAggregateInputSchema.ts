import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const StaffAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StaffAvgOrderByAggregateInput> =
	z
		.object({
			salary: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default StaffAvgOrderByAggregateInputSchema
