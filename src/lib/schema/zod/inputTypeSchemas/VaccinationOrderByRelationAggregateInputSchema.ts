import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const VaccinationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VaccinationOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default VaccinationOrderByRelationAggregateInputSchema
