import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const AuditLogUncheckedCreateInputSchema: z.ZodType<Prisma.AuditLogUncheckedCreateInput> = z
	.object({
		id: z.number().int().optional(),
		userId: z.string(),
		recordId: z.string(),
		action: z.string(),
		details: z.string().optional().nullable(),
		model: z.string(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.strict()

export default AuditLogUncheckedCreateInputSchema
