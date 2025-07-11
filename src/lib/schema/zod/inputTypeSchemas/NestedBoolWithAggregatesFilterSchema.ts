import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedBoolFilterSchema } from './NestedBoolFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
	z
		.object({
			equals: z.boolean().optional(),
			not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedBoolFilterSchema).optional(),
			_max: z.lazy(() => NestedBoolFilterSchema).optional(),
		})
		.strict()

export default NestedBoolWithAggregatesFilterSchema
