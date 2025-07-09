import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SessionUncheckedUpdateInputSchema } from '../inputTypeSchemas/SessionUncheckedUpdateInputSchema'
import { SessionUpdateInputSchema } from '../inputTypeSchemas/SessionUpdateInputSchema'
import { SessionWhereUniqueInputSchema } from '../inputTypeSchemas/SessionWhereUniqueInputSchema'

export const SessionUpdateArgsSchema: z.ZodType<
	Omit<Prisma.SessionUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema]),
		where: SessionWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default SessionUpdateArgsSchema
