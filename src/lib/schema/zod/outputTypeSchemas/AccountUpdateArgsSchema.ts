import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedUpdateInputSchema } from '../inputTypeSchemas/AccountUncheckedUpdateInputSchema'
import { AccountUpdateInputSchema } from '../inputTypeSchemas/AccountUpdateInputSchema'
import { AccountWhereUniqueInputSchema } from '../inputTypeSchemas/AccountWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AccountUpdateArgsSchema: z.ZodType<
	Omit<Prisma.AccountUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
		where: AccountWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AccountUpdateArgsSchema
