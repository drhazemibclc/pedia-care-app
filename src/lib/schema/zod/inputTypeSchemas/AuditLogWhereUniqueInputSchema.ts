import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AuditLogWhereInputSchema } from './AuditLogWhereInputSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const AuditLogWhereUniqueInputSchema: z.ZodType<Prisma.AuditLogWhereUniqueInput> = z
	.object({
		id: z.number().int(),
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => AuditLogWhereInputSchema),
						z.lazy(() => AuditLogWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => AuditLogWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => AuditLogWhereInputSchema),
						z.lazy(() => AuditLogWhereInputSchema).array(),
					])
					.optional(),
				userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				recordId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				action: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				details: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				model: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
			})
			.strict(),
	)

export default AuditLogWhereUniqueInputSchema
