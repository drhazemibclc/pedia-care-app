import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountWhereUniqueInputSchema } from '../inputTypeSchemas/AccountWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.AccountFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: AccountWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AccountFindUniqueOrThrowArgsSchema
