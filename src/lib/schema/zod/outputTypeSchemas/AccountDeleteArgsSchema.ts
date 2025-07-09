import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountWhereUniqueInputSchema } from '../inputTypeSchemas/AccountWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AccountDeleteArgsSchema: z.ZodType<
	Omit<Prisma.AccountDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: AccountWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AccountDeleteArgsSchema
