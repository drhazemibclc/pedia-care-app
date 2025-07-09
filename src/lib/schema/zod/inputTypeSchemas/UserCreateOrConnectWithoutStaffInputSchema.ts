import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema'
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStaffInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutStaffInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutStaffInputSchema
