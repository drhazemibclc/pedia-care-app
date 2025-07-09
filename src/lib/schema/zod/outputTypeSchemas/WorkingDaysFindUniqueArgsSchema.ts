import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WorkingDaysWhereUniqueInputSchema } from '../inputTypeSchemas/WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.WorkingDaysFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: WorkingDaysWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WorkingDaysFindUniqueArgsSchema
