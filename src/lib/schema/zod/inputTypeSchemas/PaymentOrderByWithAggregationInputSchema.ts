import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentAvgOrderByAggregateInputSchema } from './PaymentAvgOrderByAggregateInputSchema'
import { PaymentCountOrderByAggregateInputSchema } from './PaymentCountOrderByAggregateInputSchema'
import { PaymentMaxOrderByAggregateInputSchema } from './PaymentMaxOrderByAggregateInputSchema'
import { PaymentMinOrderByAggregateInputSchema } from './PaymentMinOrderByAggregateInputSchema'
import { PaymentSumOrderByAggregateInputSchema } from './PaymentSumOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PaymentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> =
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
			_count: z.lazy(() => PaymentCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => PaymentAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => PaymentMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => PaymentMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => PaymentSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default PaymentOrderByWithAggregationInputSchema
