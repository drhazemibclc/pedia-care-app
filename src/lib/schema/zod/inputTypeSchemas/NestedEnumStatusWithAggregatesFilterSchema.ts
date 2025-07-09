import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumStatusFilterSchema } from './NestedEnumStatusFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { StatusSchema } from './StatusSchema'

export const NestedEnumStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStatusWithAggregatesFilter> =
	z
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
				.union([
					z.lazy(() => StatusSchema),
					z.lazy(() => NestedEnumStatusWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumStatusFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumStatusFilterSchema).optional(),
		})
		.strict()

export default NestedEnumStatusWithAggregatesFilterSchema
