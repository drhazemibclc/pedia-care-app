import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumPaymentMethodWithAggregatesFilterSchema } from './EnumPaymentMethodWithAggregatesFilterSchema'
import { EnumPaymentStatusWithAggregatesFilterSchema } from './EnumPaymentStatusWithAggregatesFilterSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const PaymentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),
					z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => PaymentScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),
					z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			billId: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			patientId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			appointmentId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			billDate: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			paymentDate: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			discount: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			totalAmount: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			amountPaid: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			paymentMethod: z
				.union([
					z.lazy(() => EnumPaymentMethodWithAggregatesFilterSchema),
					z.lazy(() => PaymentMethodSchema),
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => EnumPaymentStatusWithAggregatesFilterSchema),
					z.lazy(() => PaymentStatusSchema),
				])
				.optional(),
			receiptNumber: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default PaymentScalarWhereWithAggregatesInputSchema
