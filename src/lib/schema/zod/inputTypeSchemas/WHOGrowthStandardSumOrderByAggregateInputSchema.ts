import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const WHOGrowthStandardSumOrderByAggregateInputSchema: z.ZodType<Prisma.WHOGrowthStandardSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			ageInMonths: z.lazy(() => SortOrderSchema).optional(),
			lValue: z.lazy(() => SortOrderSchema).optional(),
			mValue: z.lazy(() => SortOrderSchema).optional(),
			sValue: z.lazy(() => SortOrderSchema).optional(),
			sd0: z.lazy(() => SortOrderSchema).optional(),
			sd1neg: z.lazy(() => SortOrderSchema).optional(),
			sd1pos: z.lazy(() => SortOrderSchema).optional(),
			sd2neg: z.lazy(() => SortOrderSchema).optional(),
			sd2pos: z.lazy(() => SortOrderSchema).optional(),
			sd3neg: z.lazy(() => SortOrderSchema).optional(),
			sd3pos: z.lazy(() => SortOrderSchema).optional(),
			sd4neg: z.lazy(() => SortOrderSchema).optional(),
			sd4pos: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default WHOGrowthStandardSumOrderByAggregateInputSchema
