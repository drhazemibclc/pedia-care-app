import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const LabTestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabTestOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default LabTestOrderByRelationAggregateInputSchema
