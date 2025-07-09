import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const AppointmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AppointmentOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AppointmentOrderByRelationAggregateInputSchema
