import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumRoleWithAggregatesFilterSchema } from './EnumRoleWithAggregatesFilterSchema'
import { EnumStatusWithAggregatesFilterSchema } from './EnumStatusWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { RoleSchema } from './RoleSchema'
import { StatusSchema } from './StatusSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const StaffScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StaffScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => StaffScalarWhereWithAggregatesInputSchema),
					z.lazy(() => StaffScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => StaffScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => StaffScalarWhereWithAggregatesInputSchema),
					z.lazy(() => StaffScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			phone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			address: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			department: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			img: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			licenseNumber: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			colorCode: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			hireDate: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
			salary: z
				.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			role: z
				.union([z.lazy(() => EnumRoleWithAggregatesFilterSchema), z.lazy(() => RoleSchema)])
				.optional(),
			status: z
				.union([z.lazy(() => EnumStatusWithAggregatesFilterSchema), z.lazy(() => StatusSchema)])
				.optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default StaffScalarWhereWithAggregatesInputSchema
