import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumPaymentMethodFilterSchema } from './NestedEnumPaymentMethodFilterSchema'
import { NestedEnumPaymentMethodWithAggregatesFilterSchema } from './NestedEnumPaymentMethodWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'

export const EnumPaymentMethodWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPaymentMethodWithAggregatesFilter> =
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

export default EnumPaymentMethodWithAggregatesFilterSchema
