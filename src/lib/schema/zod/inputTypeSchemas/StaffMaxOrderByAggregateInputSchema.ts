import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const StaffMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StaffMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			phone: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			address: z.lazy(() => SortOrderSchema).optional(),
			department: z.lazy(() => SortOrderSchema).optional(),
			img: z.lazy(() => SortOrderSchema).optional(),
			licenseNumber: z.lazy(() => SortOrderSchema).optional(),
			colorCode: z.lazy(() => SortOrderSchema).optional(),
			hireDate: z.lazy(() => SortOrderSchema).optional(),
			salary: z.lazy(() => SortOrderSchema).optional(),
			role: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default StaffMaxOrderByAggregateInputSchema
