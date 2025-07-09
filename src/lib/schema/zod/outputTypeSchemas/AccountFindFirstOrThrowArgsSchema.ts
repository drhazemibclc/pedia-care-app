import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountOrderByWithRelationInputSchema } from '../inputTypeSchemas/AccountOrderByWithRelationInputSchema'
import { AccountScalarFieldEnumSchema } from '../inputTypeSchemas/AccountScalarFieldEnumSchema'
import { AccountWhereInputSchema } from '../inputTypeSchemas/AccountWhereInputSchema'
import { AccountWhereUniqueInputSchema } from '../inputTypeSchemas/AccountWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.AccountFindFirstOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: AccountWhereInputSchema.optional(),
		orderBy: z
			.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema])
			.optional(),
		cursor: AccountWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AccountFindFirstOrThrowArgsSchema
