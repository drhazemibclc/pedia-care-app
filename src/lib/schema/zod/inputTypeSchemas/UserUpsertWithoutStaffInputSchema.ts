import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema'
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema'
import { UserUncheckedUpdateWithoutStaffInputSchema } from './UserUncheckedUpdateWithoutStaffInputSchema'
import { UserUpdateWithoutStaffInputSchema } from './UserUpdateWithoutStaffInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutStaffInputSchema: z.ZodType<Prisma.UserUpsertWithoutStaffInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutStaffInputSchema),
			z.lazy(() => UserUncheckedUpdateWithoutStaffInputSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutStaffInputSchema),
			z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema),
		]),
		where: z.lazy(() => UserWhereInputSchema).optional(),
	})
	.strict()

export default UserUpsertWithoutStaffInputSchema
