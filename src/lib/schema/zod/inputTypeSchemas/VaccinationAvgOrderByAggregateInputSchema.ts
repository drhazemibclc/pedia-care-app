import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const VaccinationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VaccinationAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default VaccinationAvgOrderByAggregateInputSchema
