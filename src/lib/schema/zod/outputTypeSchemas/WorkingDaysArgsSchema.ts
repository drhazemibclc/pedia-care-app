import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysIncludeSchema } from '../inputTypeSchemas/WorkingDaysIncludeSchema'
import { WorkingDaysSelectSchema } from '../inputTypeSchemas/WorkingDaysSelectSchema'

export const WorkingDaysArgsSchema: z.ZodType<Prisma.WorkingDaysDefaultArgs> = z
	.object({
		select: z.lazy(() => WorkingDaysSelectSchema).optional(),
		include: z.lazy(() => WorkingDaysIncludeSchema).optional(),
	})
	.strict()

export default WorkingDaysArgsSchema
