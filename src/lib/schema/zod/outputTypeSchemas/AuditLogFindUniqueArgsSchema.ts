import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AuditLogFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.AuditLogFindUniqueArgs, 'select'>
> = z
	.object({
		where: AuditLogWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AuditLogFindUniqueArgsSchema
