import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StatusSchema } from './StatusSchema'

export const NestedEnumStatusFilterSchema: z.ZodType<Prisma.NestedEnumStatusFilter> = z
	.object({
		equals: z.lazy(() => StatusSchema).optional(),
		in: z
			.lazy(() => StatusSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => StatusSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => StatusSchema), z.lazy(() => NestedEnumStatusFilterSchema)])
			.optional(),
	})
	.strict()

export default NestedEnumStatusFilterSchema
