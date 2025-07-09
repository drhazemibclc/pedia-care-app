import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkingDaysOrderByWithAggregationInputSchema'
import { WorkingDaysScalarFieldEnumSchema } from '../inputTypeSchemas/WorkingDaysScalarFieldEnumSchema'
import { WorkingDaysScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkingDaysScalarWhereWithAggregatesInputSchema'
import { WorkingDaysWhereInputSchema } from '../inputTypeSchemas/WorkingDaysWhereInputSchema'

export const WorkingDaysGroupByArgsSchema: z.ZodType<Prisma.WorkingDaysGroupByArgs> = z
	.object({
		where: WorkingDaysWhereInputSchema.optional(),
		orderBy: z
			.union([
				WorkingDaysOrderByWithAggregationInputSchema.array(),
				WorkingDaysOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: WorkingDaysScalarFieldEnumSchema.array(),
		having: WorkingDaysScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default WorkingDaysGroupByArgsSchema
