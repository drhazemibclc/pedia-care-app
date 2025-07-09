import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const AuditLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.AuditLogSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AuditLogSumOrderByAggregateInputSchema
