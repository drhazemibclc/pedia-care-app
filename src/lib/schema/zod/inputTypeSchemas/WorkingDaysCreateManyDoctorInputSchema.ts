import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const WorkingDaysCreateManyDoctorInputSchema: z.ZodType<Prisma.WorkingDaysCreateManyDoctorInput> =
	z
		.object({
			id: z.number().int().optional(),
			day: z.string(),
			startTime: z.string(),
			closeTime: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default WorkingDaysCreateManyDoctorInputSchema
