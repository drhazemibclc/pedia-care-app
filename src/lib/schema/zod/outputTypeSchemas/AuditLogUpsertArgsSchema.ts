import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogCreateInputSchema } from '../inputTypeSchemas/AuditLogCreateInputSchema'
import { AuditLogUncheckedCreateInputSchema } from '../inputTypeSchemas/AuditLogUncheckedCreateInputSchema'
import { AuditLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuditLogUncheckedUpdateInputSchema'
import { AuditLogUpdateInputSchema } from '../inputTypeSchemas/AuditLogUpdateInputSchema'
import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AuditLogUpsertArgsSchema: z.ZodType<Omit<Prisma.AuditLogUpsertArgs, 'select'>> = z
	.object({
		where: AuditLogWhereUniqueInputSchema,
		create: z.union([AuditLogCreateInputSchema, AuditLogUncheckedCreateInputSchema]),
		update: z.union([AuditLogUpdateInputSchema, AuditLogUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AuditLogUpsertArgsSchema
