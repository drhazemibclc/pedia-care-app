import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const DoctorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DoctorMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			specialization: z.lazy(() => SortOrderSchema).optional(),
			licenseNumber: z.lazy(() => SortOrderSchema).optional(),
			phone: z.lazy(() => SortOrderSchema).optional(),
			address: z.lazy(() => SortOrderSchema).optional(),
			department: z.lazy(() => SortOrderSchema).optional(),
			img: z.lazy(() => SortOrderSchema).optional(),
			colorCode: z.lazy(() => SortOrderSchema).optional(),
			availabilityStatus: z.lazy(() => SortOrderSchema).optional(),
			type: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DoctorMaxOrderByAggregateInputSchema
