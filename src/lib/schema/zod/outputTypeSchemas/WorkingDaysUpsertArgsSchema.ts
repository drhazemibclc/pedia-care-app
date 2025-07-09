import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WorkingDaysCreateInputSchema } from '../inputTypeSchemas/WorkingDaysCreateInputSchema'
import { WorkingDaysUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedCreateInputSchema'
import { WorkingDaysUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedUpdateInputSchema'
import { WorkingDaysUpdateInputSchema } from '../inputTypeSchemas/WorkingDaysUpdateInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from '../inputTypeSchemas/WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysUpsertArgsSchema: z.ZodType<
	Omit<Prisma.WorkingDaysUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: WorkingDaysWhereUniqueInputSchema,
		create: z.union([WorkingDaysCreateInputSchema, WorkingDaysUncheckedCreateInputSchema]),
		update: z.union([WorkingDaysUpdateInputSchema, WorkingDaysUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WorkingDaysUpsertArgsSchema
