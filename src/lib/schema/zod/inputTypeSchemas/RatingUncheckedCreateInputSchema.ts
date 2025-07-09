import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const RatingUncheckedCreateInputSchema: z.ZodType<Prisma.RatingUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		staffId: z.string(),
		patientId: z.string(),
		rating: z.number().int(),
		comment: z.string().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.strict()

export default RatingUncheckedCreateInputSchema
