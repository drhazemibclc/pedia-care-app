import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumPaymentMethodFilterSchema } from './NestedEnumPaymentMethodFilterSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'

export const EnumPaymentMethodFilterSchema: z.ZodType<Prisma.EnumPaymentMethodFilter> = z
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
			.union([z.lazy(() => PaymentMethodSchema), z.lazy(() => NestedEnumPaymentMethodFilterSchema)])
			.optional(),
	})
	.strict()

export default EnumPaymentMethodFilterSchema
