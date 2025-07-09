import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateNestedOneWithoutRatingsInputSchema } from './DoctorCreateNestedOneWithoutRatingsInputSchema'
import { PatientCreateNestedOneWithoutRatingsInputSchema } from './PatientCreateNestedOneWithoutRatingsInputSchema'

export const RatingCreateInputSchema: z.ZodType<Prisma.RatingCreateInput> = z
	.object({
		rating: z.number().int(),
		comment: z.string().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		doctor: z.lazy(() => DoctorCreateNestedOneWithoutRatingsInputSchema),
		patient: z.lazy(() => PatientCreateNestedOneWithoutRatingsInputSchema),
	})
	.strict()

export default RatingCreateInputSchema
