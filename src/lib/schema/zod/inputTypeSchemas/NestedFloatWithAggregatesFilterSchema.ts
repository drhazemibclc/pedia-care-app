import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedFloatFilterSchema } from './NestedFloatFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> =
	z
		.object({
			equals: z.number().optional(),
			in: z.number().array().optional(),
			notIn: z.number().array().optional(),
			lt: z.number().optional(),
			lte: z.number().optional(),
			gt: z.number().optional(),
			gte: z.number().optional(),
			not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterSchema)]).optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_avg: z.lazy(() => NestedFloatFilterSchema).optional(),
			_sum: z.lazy(() => NestedFloatFilterSchema).optional(),
			_min: z.lazy(() => NestedFloatFilterSchema).optional(),
			_max: z.lazy(() => NestedFloatFilterSchema).optional(),
		})
		.strict()

export default NestedFloatWithAggregatesFilterSchema
