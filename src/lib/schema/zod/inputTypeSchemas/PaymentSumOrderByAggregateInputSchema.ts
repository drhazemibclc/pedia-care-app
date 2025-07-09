import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PaymentSumOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			billId: z.lazy(() => SortOrderSchema).optional(),
			appointmentId: z.lazy(() => SortOrderSchema).optional(),
			discount: z.lazy(() => SortOrderSchema).optional(),
			totalAmount: z.lazy(() => SortOrderSchema).optional(),
			amountPaid: z.lazy(() => SortOrderSchema).optional(),
			receiptNumber: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PaymentSumOrderByAggregateInputSchema
