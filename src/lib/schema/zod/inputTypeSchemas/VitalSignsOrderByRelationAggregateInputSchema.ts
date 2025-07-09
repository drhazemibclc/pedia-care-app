import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const VitalSignsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VitalSignsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default VitalSignsOrderByRelationAggregateInputSchema
