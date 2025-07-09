import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PaymentCountOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			billId: z.lazy(() => SortOrderSchema).optional(),
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
		})
		.strict()

export default PaymentCountOrderByAggregateInputSchema
