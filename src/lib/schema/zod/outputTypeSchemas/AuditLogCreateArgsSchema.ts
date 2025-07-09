import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogCreateInputSchema } from '../inputTypeSchemas/AuditLogCreateInputSchema'
import { AuditLogUncheckedCreateInputSchema } from '../inputTypeSchemas/AuditLogUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AuditLogCreateArgsSchema: z.ZodType<Omit<Prisma.AuditLogCreateArgs, 'select'>> = z
	.object({
		data: z.union([AuditLogCreateInputSchema, AuditLogUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AuditLogCreateArgsSchema
