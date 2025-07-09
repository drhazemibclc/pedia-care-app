import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuditLogUncheckedUpdateInputSchema'
import { AuditLogUpdateInputSchema } from '../inputTypeSchemas/AuditLogUpdateInputSchema'
import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AuditLogUpdateArgsSchema: z.ZodType<Omit<Prisma.AuditLogUpdateArgs, 'select'>> = z
	.object({
		data: z.union([AuditLogUpdateInputSchema, AuditLogUncheckedUpdateInputSchema]),
		where: AuditLogWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AuditLogUpdateArgsSchema
