import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.UserFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: UserWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default UserFindUniqueOrThrowArgsSchema
