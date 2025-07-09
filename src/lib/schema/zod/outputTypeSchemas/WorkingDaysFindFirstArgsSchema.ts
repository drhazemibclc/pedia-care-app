import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { WorkingDaysOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkingDaysOrderByWithRelationInputSchema'
import { WorkingDaysScalarFieldEnumSchema } from '../inputTypeSchemas/WorkingDaysScalarFieldEnumSchema'
import { WorkingDaysWhereInputSchema } from '../inputTypeSchemas/WorkingDaysWhereInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from '../inputTypeSchemas/WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysFindFirstArgsSchema: z.ZodType<
	Omit<Prisma.WorkingDaysFindFirstArgs, 'select' | 'include'>
> = z
	.object({
		where: WorkingDaysWhereInputSchema.optional(),
		orderBy: z
			.union([
				WorkingDaysOrderByWithRelationInputSchema.array(),
				WorkingDaysOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: WorkingDaysWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([WorkingDaysScalarFieldEnumSchema, WorkingDaysScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default WorkingDaysFindFirstArgsSchema
