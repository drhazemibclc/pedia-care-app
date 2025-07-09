import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const AuditLogSelectSchema: z.ZodType<Prisma.AuditLogSelect> = z
	.object({
		id: z.boolean().optional(),
		userId: z.boolean().optional(),
		recordId: z.boolean().optional(),
		action: z.boolean().optional(),
		details: z.boolean().optional(),
		model: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export default AuditLogSelectSchema
