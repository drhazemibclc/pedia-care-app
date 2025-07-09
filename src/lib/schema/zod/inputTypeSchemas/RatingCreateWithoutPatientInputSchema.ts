import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateNestedOneWithoutRatingsInputSchema } from './DoctorCreateNestedOneWithoutRatingsInputSchema'

export const RatingCreateWithoutPatientInputSchema: z.ZodType<Prisma.RatingCreateWithoutPatientInput> =
	z
		.object({
			rating: z.number().int(),
			comment: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			doctor: z.lazy(() => DoctorCreateNestedOneWithoutRatingsInputSchema),
		})
		.strict()

export default RatingCreateWithoutPatientInputSchema
