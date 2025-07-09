import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StaffOrderByWithAggregationInputSchema'
import { StaffScalarFieldEnumSchema } from '../inputTypeSchemas/StaffScalarFieldEnumSchema'
import { StaffScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StaffScalarWhereWithAggregatesInputSchema'
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'

export const StaffGroupByArgsSchema: z.ZodType<Prisma.StaffGroupByArgs> = z
	.object({
		where: StaffWhereInputSchema.optional(),
		orderBy: z
			.union([
				StaffOrderByWithAggregationInputSchema.array(),
				StaffOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: StaffScalarFieldEnumSchema.array(),
		having: StaffScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default StaffGroupByArgsSchema
