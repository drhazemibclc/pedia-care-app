import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffDeleteArgsSchema: z.ZodType<Omit<Prisma.StaffDeleteArgs, 'select' | 'include'>> =
	z
		.object({
			where: StaffWhereUniqueInputSchema,
			relationLoadStrategy: RelationLoadStrategySchema.optional(),
		})
		.strict()

export default StaffDeleteArgsSchema
