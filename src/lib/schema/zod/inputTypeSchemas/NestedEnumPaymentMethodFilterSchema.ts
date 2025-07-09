import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentMethodSchema } from './PaymentMethodSchema'

export const NestedEnumPaymentMethodFilterSchema: z.ZodType<Prisma.NestedEnumPaymentMethodFilter> =
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
					z.lazy(() => NestedEnumPaymentMethodFilterSchema),
				])
				.optional(),
		})
		.strict()

export default NestedEnumPaymentMethodFilterSchema
