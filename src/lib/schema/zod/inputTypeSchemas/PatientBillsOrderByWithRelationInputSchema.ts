import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentOrderByWithRelationInputSchema } from './PaymentOrderByWithRelationInputSchema'
import { ServicesOrderByWithRelationInputSchema } from './ServicesOrderByWithRelationInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PatientBillsOrderByWithRelationInputSchema: z.ZodType<Prisma.PatientBillsOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			billId: z.lazy(() => SortOrderSchema).optional(),
			serviceId: z.lazy(() => SortOrderSchema).optional(),
			serviceDate: z.lazy(() => SortOrderSchema).optional(),
			quantity: z.lazy(() => SortOrderSchema).optional(),
			unitCost: z.lazy(() => SortOrderSchema).optional(),
			totalCost: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			service: z.lazy(() => ServicesOrderByWithRelationInputSchema).optional(),
			payment: z.lazy(() => PaymentOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default PatientBillsOrderByWithRelationInputSchema
