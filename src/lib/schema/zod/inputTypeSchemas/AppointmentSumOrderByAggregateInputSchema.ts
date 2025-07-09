import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const AppointmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			serviceId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AppointmentSumOrderByAggregateInputSchema
