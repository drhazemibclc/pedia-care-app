import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const AuditLogOrderByWithRelationInputSchema: z.ZodType<Prisma.AuditLogOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			recordId: z.lazy(() => SortOrderSchema).optional(),
			action: z.lazy(() => SortOrderSchema).optional(),
			details: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			model: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AuditLogOrderByWithRelationInputSchema
