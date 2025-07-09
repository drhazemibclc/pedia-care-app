import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => UserScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			emailVerified: z
				.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
				.optional(),
			image: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			role: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			banned: z
				.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
				.optional()
				.nullable(),
			banReason: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			banExpires: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
		})
		.strict()

export default UserScalarWhereWithAggregatesInputSchema
