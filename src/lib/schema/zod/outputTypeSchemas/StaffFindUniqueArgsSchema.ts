import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.StaffFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: StaffWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default StaffFindUniqueArgsSchema
