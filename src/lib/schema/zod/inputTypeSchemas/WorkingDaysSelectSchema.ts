import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'

export const WorkingDaysSelectSchema: z.ZodType<Prisma.WorkingDaysSelect> = z
	.object({
		id: z.boolean().optional(),
		doctorId: z.boolean().optional(),
		day: z.boolean().optional(),
		startTime: z.boolean().optional(),
		closeTime: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
	})
	.strict()

export default WorkingDaysSelectSchema
