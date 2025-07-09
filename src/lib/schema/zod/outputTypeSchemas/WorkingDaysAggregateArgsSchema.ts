import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkingDaysOrderByWithRelationInputSchema'
import { WorkingDaysWhereInputSchema } from '../inputTypeSchemas/WorkingDaysWhereInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from '../inputTypeSchemas/WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysAggregateArgsSchema: z.ZodType<Prisma.WorkingDaysAggregateArgs> = z
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
	})
	.strict()

export default WorkingDaysAggregateArgsSchema
