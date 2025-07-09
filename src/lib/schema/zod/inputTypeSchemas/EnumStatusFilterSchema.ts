import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumStatusFilterSchema } from './NestedEnumStatusFilterSchema'
import { StatusSchema } from './StatusSchema'

export const EnumStatusFilterSchema: z.ZodType<Prisma.EnumStatusFilter> = z
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

export default EnumStatusFilterSchema
