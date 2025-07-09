import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserUncheckedUpdateWithoutStaffInputSchema } from './UserUncheckedUpdateWithoutStaffInputSchema'
import { UserUpdateWithoutStaffInputSchema } from './UserUpdateWithoutStaffInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpdateToOneWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStaffInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutStaffInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutStaffInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutStaffInputSchema
