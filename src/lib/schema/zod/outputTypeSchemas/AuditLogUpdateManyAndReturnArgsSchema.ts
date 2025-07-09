import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AuditLogUncheckedUpdateManyInputSchema'
import { AuditLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/AuditLogUpdateManyMutationInputSchema'
import { AuditLogWhereInputSchema } from '../inputTypeSchemas/AuditLogWhereInputSchema'

export const AuditLogUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AuditLogUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				AuditLogUpdateManyMutationInputSchema,
				AuditLogUncheckedUpdateManyInputSchema,
			]),
			where: AuditLogWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default AuditLogUpdateManyAndReturnArgsSchema
