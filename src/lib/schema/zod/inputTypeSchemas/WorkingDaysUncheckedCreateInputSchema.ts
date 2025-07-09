import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const WorkingDaysUncheckedCreateInputSchema: z.ZodType<Prisma.WorkingDaysUncheckedCreateInput> =
	z
		.object({
			id: z.number().int().optional(),
			doctorId: z.string(),
			day: z.string(),
			startTime: z.string(),
			closeTime: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default WorkingDaysUncheckedCreateInputSchema
