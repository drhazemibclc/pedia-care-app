import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateNestedManyWithoutPaymentInputSchema } from './PatientBillsCreateNestedManyWithoutPaymentInputSchema'
import { PatientCreateNestedOneWithoutPaymentsInputSchema } from './PatientCreateNestedOneWithoutPaymentsInputSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'

export const PaymentCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentCreateWithoutAppointmentInput> =
	z
		.object({
			billId: z.number().int().optional().nullable(),
			billDate: z.coerce.date(),
			paymentDate: z.coerce.date(),
			discount: z.number(),
			totalAmount: z.number(),
			amountPaid: z.number(),
			paymentMethod: z.lazy(() => PaymentMethodSchema).optional(),
			status: z.lazy(() => PaymentStatusSchema).optional(),
			receiptNumber: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			patient: z.lazy(() => PatientCreateNestedOneWithoutPaymentsInputSchema),
			bills: z.lazy(() => PatientBillsCreateNestedManyWithoutPaymentInputSchema).optional(),
		})
		.strict()

export default PaymentCreateWithoutAppointmentInputSchema
