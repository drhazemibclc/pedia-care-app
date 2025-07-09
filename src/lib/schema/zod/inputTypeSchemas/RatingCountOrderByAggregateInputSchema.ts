import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const RatingCountOrderByAggregateInputSchema: z.ZodType<Prisma.RatingCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			staffId: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			rating: z.lazy(() => SortOrderSchema).optional(),
			comment: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default RatingCountOrderByAggregateInputSchema
