import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountWhereUniqueInputSchema } from '../inputTypeSchemas/AccountWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AccountFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.AccountFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: AccountWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AccountFindUniqueArgsSchema
