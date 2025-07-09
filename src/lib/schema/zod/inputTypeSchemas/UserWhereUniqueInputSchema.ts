import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DoctorListRelationFilterSchema } from './DoctorListRelationFilterSchema'
import { PatientListRelationFilterSchema } from './PatientListRelationFilterSchema'
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema'
import { StaffListRelationFilterSchema } from './StaffListRelationFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z
	.union([
		z.object({
			id: z.string(),
			email: z.string(),
		}),
		z.object({
			id: z.string(),
		}),
		z.object({
			email: z.string(),
		}),
	])
	.and(
		z
			.object({
				id: z.string().optional(),
				email: z.string().optional(),
				AND: z
					.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()])
					.optional(),
				OR: z
					.lazy(() => UserWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()])
					.optional(),
				name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				emailVerified: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				image: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				role: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				banned: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				banReason: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				banExpires: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
				accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
				Staff: z.lazy(() => StaffListRelationFilterSchema).optional(),
				Doctor: z.lazy(() => DoctorListRelationFilterSchema).optional(),
				Patient: z.lazy(() => PatientListRelationFilterSchema).optional(),
			})
			.strict(),
	)

export default UserWhereUniqueInputSchema
