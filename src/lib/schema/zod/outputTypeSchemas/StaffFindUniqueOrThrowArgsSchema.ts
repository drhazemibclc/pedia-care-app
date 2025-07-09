import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.StaffFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: StaffWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default StaffFindUniqueOrThrowArgsSchema
