import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { SessionOrderByWithRelationInputSchema } from '../inputTypeSchemas/SessionOrderByWithRelationInputSchema'
import { SessionScalarFieldEnumSchema } from '../inputTypeSchemas/SessionScalarFieldEnumSchema'
import { SessionWhereInputSchema } from '../inputTypeSchemas/SessionWhereInputSchema'
import { SessionWhereUniqueInputSchema } from '../inputTypeSchemas/SessionWhereUniqueInputSchema'

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.SessionFindFirstOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: SessionWhereInputSchema.optional(),
		orderBy: z
			.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema])
			.optional(),
		cursor: SessionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default SessionFindFirstOrThrowArgsSchema
