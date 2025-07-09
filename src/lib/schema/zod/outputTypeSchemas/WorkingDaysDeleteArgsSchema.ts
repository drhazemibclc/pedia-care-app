import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WorkingDaysWhereUniqueInputSchema } from '../inputTypeSchemas/WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysDeleteArgsSchema: z.ZodType<
	Omit<Prisma.WorkingDaysDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: WorkingDaysWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WorkingDaysDeleteArgsSchema
