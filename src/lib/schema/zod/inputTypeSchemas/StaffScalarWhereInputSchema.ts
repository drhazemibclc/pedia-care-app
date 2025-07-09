import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema'
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { RoleSchema } from './RoleSchema'
import { StatusSchema } from './StatusSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const StaffScalarWhereInputSchema: z.ZodType<Prisma.StaffScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => StaffScalarWhereInputSchema),
				z.lazy(() => StaffScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => StaffScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => StaffScalarWhereInputSchema),
				z.lazy(() => StaffScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		department: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		img: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		licenseNumber: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		colorCode: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		hireDate: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		salary: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
		status: z.union([z.lazy(() => EnumStatusFilterSchema), z.lazy(() => StatusSchema)]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default StaffScalarWhereInputSchema
