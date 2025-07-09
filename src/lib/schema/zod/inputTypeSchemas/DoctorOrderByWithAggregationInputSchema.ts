import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCountOrderByAggregateInputSchema } from './DoctorCountOrderByAggregateInputSchema'
import { DoctorMaxOrderByAggregateInputSchema } from './DoctorMaxOrderByAggregateInputSchema'
import { DoctorMinOrderByAggregateInputSchema } from './DoctorMinOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const DoctorOrderByWithAggregationInputSchema: z.ZodType<Prisma.DoctorOrderByWithAggregationInput> =
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
			department: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			img: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			colorCode: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			availabilityStatus: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			type: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => DoctorCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => DoctorMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => DoctorMinOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default DoctorOrderByWithAggregationInputSchema
