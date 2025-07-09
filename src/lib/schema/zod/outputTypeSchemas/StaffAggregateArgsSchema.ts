import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffOrderByWithRelationInputSchema } from '../inputTypeSchemas/StaffOrderByWithRelationInputSchema'
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffAggregateArgsSchema: z.ZodType<Prisma.StaffAggregateArgs> = z
	.object({
		where: StaffWhereInputSchema.optional(),
		orderBy: z
			.union([StaffOrderByWithRelationInputSchema.array(), StaffOrderByWithRelationInputSchema])
			.optional(),
		cursor: StaffWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default StaffAggregateArgsSchema
