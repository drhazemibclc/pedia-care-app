import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const WorkingDaysSumOrderByAggregateInputSchema: z.ZodType<Prisma.WorkingDaysSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default WorkingDaysSumOrderByAggregateInputSchema
