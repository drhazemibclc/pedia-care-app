import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const WorkingDaysAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WorkingDaysAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default WorkingDaysAvgOrderByAggregateInputSchema
