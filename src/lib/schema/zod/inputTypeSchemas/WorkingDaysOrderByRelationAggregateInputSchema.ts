import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const WorkingDaysOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkingDaysOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default WorkingDaysOrderByRelationAggregateInputSchema
