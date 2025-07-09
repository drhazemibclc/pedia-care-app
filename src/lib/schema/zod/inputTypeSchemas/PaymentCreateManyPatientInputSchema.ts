import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentMethodSchema } from './PaymentMethodSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'

export const PaymentCreateManyPatientInputSchema: z.ZodType<Prisma.PaymentCreateManyPatientInput> =
	z
		.object({
			id: z.number().int().optional(),
			billId: z.number().int().optional().nullable(),
			appointmentId: z.number().int(),
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
		})
		.strict()

export default PaymentCreateManyPatientInputSchema
