import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const WorkingDaysCreateWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysCreateWithoutDoctorInput> =
	z
		.object({
			day: z.string(),
			startTime: z.string(),
			closeTime: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default WorkingDaysCreateWithoutDoctorInputSchema
