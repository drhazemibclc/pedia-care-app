import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountWhereInputSchema } from '../inputTypeSchemas/AccountWhereInputSchema'

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z
	.object({
		where: AccountWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default AccountDeleteManyArgsSchema
