import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumPaymentMethodFilterSchema } from './NestedEnumPaymentMethodFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'

export const NestedEnumPaymentMethodWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPaymentMethodWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => PaymentMethodSchema).optional(),
			in: z
				.lazy(() => PaymentMethodSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => PaymentMethodSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => PaymentMethodSchema),
					z.lazy(() => NestedEnumPaymentMethodWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumPaymentMethodFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumPaymentMethodFilterSchema).optional(),
		})
		.strict()

export default NestedEnumPaymentMethodWithAggregatesFilterSchema
