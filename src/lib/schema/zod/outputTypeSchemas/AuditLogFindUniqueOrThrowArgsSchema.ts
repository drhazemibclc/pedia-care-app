import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AuditLogFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.AuditLogFindUniqueOrThrowArgs, 'select'>
> = z
	.object({
		where: AuditLogWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AuditLogFindUniqueOrThrowArgsSchema
