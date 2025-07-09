import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateInputSchema } from '../inputTypeSchemas/AccountCreateInputSchema'
import { AccountUncheckedCreateInputSchema } from '../inputTypeSchemas/AccountUncheckedCreateInputSchema'
import { AccountUncheckedUpdateInputSchema } from '../inputTypeSchemas/AccountUncheckedUpdateInputSchema'
import { AccountUpdateInputSchema } from '../inputTypeSchemas/AccountUpdateInputSchema'
import { AccountWhereUniqueInputSchema } from '../inputTypeSchemas/AccountWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AccountUpsertArgsSchema: z.ZodType<
	Omit<Prisma.AccountUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: AccountWhereUniqueInputSchema,
		create: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
		update: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AccountUpsertArgsSchema
