import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SessionCreateInputSchema } from '../inputTypeSchemas/SessionCreateInputSchema'
import { SessionUncheckedCreateInputSchema } from '../inputTypeSchemas/SessionUncheckedCreateInputSchema'

export const SessionCreateArgsSchema: z.ZodType<
	Omit<Prisma.SessionCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default SessionCreateArgsSchema
