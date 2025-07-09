import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorOrderByWithRelationInputSchema } from './DoctorOrderByWithRelationInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const WorkingDaysOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkingDaysOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			day: z.lazy(() => SortOrderSchema).optional(),
			startTime: z.lazy(() => SortOrderSchema).optional(),
			closeTime: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			doctor: z.lazy(() => DoctorOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default WorkingDaysOrderByWithRelationInputSchema
