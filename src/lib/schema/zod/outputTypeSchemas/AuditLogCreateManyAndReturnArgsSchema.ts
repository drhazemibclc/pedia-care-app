import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogCreateManyInputSchema } from '../inputTypeSchemas/AuditLogCreateManyInputSchema'

export const AuditLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AuditLogCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([AuditLogCreateManyInputSchema, AuditLogCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default AuditLogCreateManyAndReturnArgsSchema
