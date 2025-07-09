import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysCreateManyInputSchema } from '../inputTypeSchemas/WorkingDaysCreateManyInputSchema'

export const WorkingDaysCreateManyArgsSchema: z.ZodType<Prisma.WorkingDaysCreateManyArgs> = z
	.object({
		data: z.union([WorkingDaysCreateManyInputSchema, WorkingDaysCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default WorkingDaysCreateManyArgsSchema
