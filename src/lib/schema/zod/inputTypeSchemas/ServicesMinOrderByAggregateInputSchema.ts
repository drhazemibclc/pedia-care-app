import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const ServicesMinOrderByAggregateInputSchema: z.ZodType<Prisma.ServicesMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			serviceName: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			category: z.lazy(() => SortOrderSchema).optional(),
			duration: z.lazy(() => SortOrderSchema).optional(),
			isAvailable: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default ServicesMinOrderByAggregateInputSchema
