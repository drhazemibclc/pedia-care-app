import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema'
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { RoleSchema } from './RoleSchema'
import { StaffWhereInputSchema } from './StaffWhereInputSchema'
import { StatusSchema } from './StatusSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { VaccinationListRelationFilterSchema } from './VaccinationListRelationFilterSchema'

export const StaffWhereUniqueInputSchema: z.ZodType<Prisma.StaffWhereUniqueInput> = z
	.union([
		z.object({
			id: z.string(),
			email: z.string(),
			userId: z.string(),
		}),
		z.object({
			id: z.string(),
			email: z.string(),
		}),
		z.object({
			id: z.string(),
			userId: z.string(),
		}),
		z.object({
			id: z.string(),
		}),
		z.object({
			email: z.string(),
			userId: z.string(),
		}),
		z.object({
			email: z.string(),
		}),
		z.object({
			userId: z.string(),
		}),
	])
	.and(
		z
			.object({
				id: z.string().optional(),
				email: z.string().optional(),
				userId: z.string().optional(),
				AND: z
					.union([z.lazy(() => StaffWhereInputSchema), z.lazy(() => StaffWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => StaffWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => StaffWhereInputSchema), z.lazy(() => StaffWhereInputSchema).array()])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
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
				status: z
					.union([z.lazy(() => EnumStatusFilterSchema), z.lazy(() => StatusSchema)])
					.optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				user: z
					.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
					.optional(),
				Vaccination: z.lazy(() => VaccinationListRelationFilterSchema).optional(),
			})
			.strict(),
	)

export default StaffWhereUniqueInputSchema
