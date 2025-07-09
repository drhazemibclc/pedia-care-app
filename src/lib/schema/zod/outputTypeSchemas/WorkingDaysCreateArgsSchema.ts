import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WorkingDaysCreateInputSchema } from '../inputTypeSchemas/WorkingDaysCreateInputSchema'
import { WorkingDaysUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedCreateInputSchema'

export const WorkingDaysCreateArgsSchema: z.ZodType<
	Omit<Prisma.WorkingDaysCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([WorkingDaysCreateInputSchema, WorkingDaysUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WorkingDaysCreateArgsSchema
