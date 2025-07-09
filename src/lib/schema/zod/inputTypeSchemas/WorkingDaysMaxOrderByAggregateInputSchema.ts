import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const WorkingDaysMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WorkingDaysMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			day: z.lazy(() => SortOrderSchema).optional(),
			startTime: z.lazy(() => SortOrderSchema).optional(),
			closeTime: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default WorkingDaysMaxOrderByAggregateInputSchema
