import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentArgsSchema } from '../outputTypeSchemas/AppointmentArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'
import { PatientBillsFindManyArgsSchema } from '../outputTypeSchemas/PatientBillsFindManyArgsSchema'
import { PaymentCountOutputTypeArgsSchema } from '../outputTypeSchemas/PaymentCountOutputTypeArgsSchema'

export const PaymentSelectSchema: z.ZodType<Prisma.PaymentSelect> = z
	.object({
		id: z.boolean().optional(),
		billId: z.boolean().optional(),
		patientId: z.boolean().optional(),
		appointmentId: z.boolean().optional(),
		billDate: z.boolean().optional(),
		paymentDate: z.boolean().optional(),
		discount: z.boolean().optional(),
		totalAmount: z.boolean().optional(),
		amountPaid: z.boolean().optional(),
		paymentMethod: z.boolean().optional(),
		status: z.boolean().optional(),
		receiptNumber: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsSchema)]).optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
		bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => PaymentCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default PaymentSelectSchema
