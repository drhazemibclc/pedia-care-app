import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WorkingDaysUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedUpdateInputSchema'
import { WorkingDaysUpdateInputSchema } from '../inputTypeSchemas/WorkingDaysUpdateInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from '../inputTypeSchemas/WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysUpdateArgsSchema: z.ZodType<
	Omit<Prisma.WorkingDaysUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([WorkingDaysUpdateInputSchema, WorkingDaysUncheckedUpdateInputSchema]),
		where: WorkingDaysWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WorkingDaysUpdateArgsSchema
