import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuditLogOrderByWithRelationInputSchema'
import { AuditLogScalarFieldEnumSchema } from '../inputTypeSchemas/AuditLogScalarFieldEnumSchema'
import { AuditLogWhereInputSchema } from '../inputTypeSchemas/AuditLogWhereInputSchema'
import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const AuditLogFindFirstOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.AuditLogFindFirstOrThrowArgs, 'select'>
> = z
	.object({
		where: AuditLogWhereInputSchema.optional(),
		orderBy: z
			.union([
				AuditLogOrderByWithRelationInputSchema.array(),
				AuditLogOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: AuditLogWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default AuditLogFindFirstOrThrowArgsSchema
