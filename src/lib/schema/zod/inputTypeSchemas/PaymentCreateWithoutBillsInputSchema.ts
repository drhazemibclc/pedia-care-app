import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateNestedOneWithoutBillsInputSchema } from './AppointmentCreateNestedOneWithoutBillsInputSchema'
import { PatientCreateNestedOneWithoutPaymentsInputSchema } from './PatientCreateNestedOneWithoutPaymentsInputSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'

export const PaymentCreateWithoutBillsInputSchema: z.ZodType<Prisma.PaymentCreateWithoutBillsInput> =
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
			appointment: z.lazy(() => AppointmentCreateNestedOneWithoutBillsInputSchema),
			patient: z.lazy(() => PatientCreateNestedOneWithoutPaymentsInputSchema),
		})
		.strict()

export default PaymentCreateWithoutBillsInputSchema
