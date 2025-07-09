import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SessionWhereUniqueInputSchema } from '../inputTypeSchemas/SessionWhereUniqueInputSchema'

export const SessionDeleteArgsSchema: z.ZodType<
	Omit<Prisma.SessionDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: SessionWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default SessionDeleteArgsSchema
