import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateInputSchema } from '../inputTypeSchemas/AccountCreateInputSchema'
import { AccountUncheckedCreateInputSchema } from '../inputTypeSchemas/AccountUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AccountCreateArgsSchema: z.ZodType<
	Omit<Prisma.AccountCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AccountCreateArgsSchema
