import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SessionCreateInputSchema } from '../inputTypeSchemas/SessionCreateInputSchema'
import { SessionUncheckedCreateInputSchema } from '../inputTypeSchemas/SessionUncheckedCreateInputSchema'
import { SessionUncheckedUpdateInputSchema } from '../inputTypeSchemas/SessionUncheckedUpdateInputSchema'
import { SessionUpdateInputSchema } from '../inputTypeSchemas/SessionUpdateInputSchema'
import { SessionWhereUniqueInputSchema } from '../inputTypeSchemas/SessionWhereUniqueInputSchema'

export const SessionUpsertArgsSchema: z.ZodType<
	Omit<Prisma.SessionUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: SessionWhereUniqueInputSchema,
		create: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema]),
		update: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default SessionUpsertArgsSchema
