import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUpdateOneRequiredWithoutBillsNestedInputSchema } from './AppointmentUpdateOneRequiredWithoutBillsNestedInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EnumPaymentMethodFieldUpdateOperationsInputSchema } from './EnumPaymentMethodFieldUpdateOperationsInputSchema'
import { EnumPaymentStatusFieldUpdateOperationsInputSchema } from './EnumPaymentStatusFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { PatientBillsUpdateManyWithoutPaymentNestedInputSchema } from './PatientBillsUpdateManyWithoutPaymentNestedInputSchema'
import { PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema } from './PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'

export const PaymentUpdateInputSchema: z.ZodType<Prisma.PaymentUpdateInput> = z
	.object({
		billId: z
			.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		billDate: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		paymentDate: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		discount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
		totalAmount: z
			.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
			.optional(),
		amountPaid: z
			.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
			.optional(),
		paymentMethod: z
			.union([
				z.lazy(() => PaymentMethodSchema),
				z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema),
			])
			.optional(),
		status: z
			.union([
				z.lazy(() => PaymentStatusSchema),
				z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
			])
			.optional(),
		receiptNumber: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		appointment: z.lazy(() => AppointmentUpdateOneRequiredWithoutBillsNestedInputSchema).optional(),
		patient: z.lazy(() => PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
		bills: z.lazy(() => PatientBillsUpdateManyWithoutPaymentNestedInputSchema).optional(),
	})
	.strict()

export default PaymentUpdateInputSchema
