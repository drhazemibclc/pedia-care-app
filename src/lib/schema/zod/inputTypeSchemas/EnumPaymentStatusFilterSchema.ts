import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumPaymentStatusFilterSchema } from './NestedEnumPaymentStatusFilterSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'

export const EnumPaymentStatusFilterSchema: z.ZodType<Prisma.EnumPaymentStatusFilter> = z
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
			.union([z.lazy(() => PaymentStatusSchema), z.lazy(() => NestedEnumPaymentStatusFilterSchema)])
			.optional(),
	})
	.strict()

export default EnumPaymentStatusFilterSchema
