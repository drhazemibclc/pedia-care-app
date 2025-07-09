import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const RatingUncheckedCreateWithoutDoctorInputSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutDoctorInput> =
	z
		.object({
			id: z.number().int().optional(),
			patientId: z.string(),
			rating: z.number().int(),
			comment: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default RatingUncheckedCreateWithoutDoctorInputSchema
