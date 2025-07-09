import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const StaffSumOrderByAggregateInputSchema: z.ZodType<Prisma.StaffSumOrderByAggregateInput> =
	z
		.object({
			salary: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default StaffSumOrderByAggregateInputSchema
