import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PatientBillsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PatientBillsSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			billId: z.lazy(() => SortOrderSchema).optional(),
			serviceId: z.lazy(() => SortOrderSchema).optional(),
			quantity: z.lazy(() => SortOrderSchema).optional(),
			unitCost: z.lazy(() => SortOrderSchema).optional(),
			totalCost: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PatientBillsSumOrderByAggregateInputSchema
