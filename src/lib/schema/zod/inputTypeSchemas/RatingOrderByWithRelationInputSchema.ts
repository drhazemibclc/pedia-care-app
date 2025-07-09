import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorOrderByWithRelationInputSchema } from './DoctorOrderByWithRelationInputSchema'
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const RatingOrderByWithRelationInputSchema: z.ZodType<Prisma.RatingOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			staffId: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			rating: z.lazy(() => SortOrderSchema).optional(),
			comment: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			doctor: z.lazy(() => DoctorOrderByWithRelationInputSchema).optional(),
			patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default RatingOrderByWithRelationInputSchema
