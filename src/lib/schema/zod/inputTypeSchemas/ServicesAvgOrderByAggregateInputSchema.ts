import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const ServicesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ServicesAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			duration: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default ServicesAvgOrderByAggregateInputSchema
