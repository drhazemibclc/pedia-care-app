import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByWithRelationInputSchema } from './AppointmentOrderByWithRelationInputSchema'
import { PatientBillsOrderByRelationAggregateInputSchema } from './PatientBillsOrderByRelationAggregateInputSchema'
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PaymentOrderByWithRelationInputSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			billId: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			appointmentId: z.lazy(() => SortOrderSchema).optional(),
			billDate: z.lazy(() => SortOrderSchema).optional(),
			paymentDate: z.lazy(() => SortOrderSchema).optional(),
			discount: z.lazy(() => SortOrderSchema).optional(),
			totalAmount: z.lazy(() => SortOrderSchema).optional(),
			amountPaid: z.lazy(() => SortOrderSchema).optional(),
			paymentMethod: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			receiptNumber: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional(),
			patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
			bills: z.lazy(() => PatientBillsOrderByRelationAggregateInputSchema).optional(),
		})
		.strict()

export default PaymentOrderByWithRelationInputSchema
