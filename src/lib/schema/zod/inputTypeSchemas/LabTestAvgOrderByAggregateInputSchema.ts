import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const LabTestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LabTestAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			recordId: z.lazy(() => SortOrderSchema).optional(),
			serviceId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default LabTestAvgOrderByAggregateInputSchema
