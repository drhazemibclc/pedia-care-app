import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateNestedOneWithoutWorkingDaysInputSchema } from './DoctorCreateNestedOneWithoutWorkingDaysInputSchema'

export const WorkingDaysCreateInputSchema: z.ZodType<Prisma.WorkingDaysCreateInput> = z
	.object({
		day: z.string(),
		startTime: z.string(),
		closeTime: z.string(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		doctor: z.lazy(() => DoctorCreateNestedOneWithoutWorkingDaysInputSchema),
	})
	.strict()

export default WorkingDaysCreateInputSchema
