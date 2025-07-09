import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysWhereInputSchema } from '../inputTypeSchemas/WorkingDaysWhereInputSchema'

export const WorkingDaysDeleteManyArgsSchema: z.ZodType<Prisma.WorkingDaysDeleteManyArgs> = z
	.object({
		where: WorkingDaysWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default WorkingDaysDeleteManyArgsSchema
