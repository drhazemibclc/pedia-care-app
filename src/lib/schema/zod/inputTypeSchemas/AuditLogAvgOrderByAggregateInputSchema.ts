import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const AuditLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuditLogAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AuditLogAvgOrderByAggregateInputSchema
