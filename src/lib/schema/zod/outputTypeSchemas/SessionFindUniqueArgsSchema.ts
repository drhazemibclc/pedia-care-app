import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SessionWhereUniqueInputSchema } from '../inputTypeSchemas/SessionWhereUniqueInputSchema'

export const SessionFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.SessionFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: SessionWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default SessionFindUniqueArgsSchema
