import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumPaymentStatusFilterSchema } from './NestedEnumPaymentStatusFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'

export const NestedEnumPaymentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPaymentStatusWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => PaymentStatusSchema).optional(),
			in: z
				.lazy(() => PaymentStatusSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => PaymentStatusSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => PaymentStatusSchema),
					z.lazy(() => NestedEnumPaymentStatusWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
		})
		.strict()

export default NestedEnumPaymentStatusWithAggregatesFilterSchema
