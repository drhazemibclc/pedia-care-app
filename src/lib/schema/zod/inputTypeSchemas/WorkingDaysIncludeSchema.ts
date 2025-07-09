import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'

export const WorkingDaysIncludeSchema: z.ZodType<Prisma.WorkingDaysInclude> = z
	.object({
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
	})
	.strict()

export default WorkingDaysIncludeSchema
