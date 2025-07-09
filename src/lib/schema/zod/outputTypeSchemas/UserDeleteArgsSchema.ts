import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'

export const UserDeleteArgsSchema: z.ZodType<Omit<Prisma.UserDeleteArgs, 'select' | 'include'>> = z
	.object({
		where: UserWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default UserDeleteArgsSchema
