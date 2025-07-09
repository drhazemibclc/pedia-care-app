import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const DiagnosisSumOrderByAggregateInputSchema: z.ZodType<Prisma.DiagnosisSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			medicalId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DiagnosisSumOrderByAggregateInputSchema
