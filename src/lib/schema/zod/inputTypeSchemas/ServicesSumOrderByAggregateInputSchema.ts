import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const ServicesSumOrderByAggregateInputSchema: z.ZodType<Prisma.ServicesSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			duration: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default ServicesSumOrderByAggregateInputSchema
