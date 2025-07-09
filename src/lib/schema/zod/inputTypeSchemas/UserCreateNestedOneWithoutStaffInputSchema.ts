import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutStaffInputSchema } from './UserCreateOrConnectWithoutStaffInputSchema'
import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema'
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutStaffInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStaffInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutStaffInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStaffInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutStaffInputSchema
