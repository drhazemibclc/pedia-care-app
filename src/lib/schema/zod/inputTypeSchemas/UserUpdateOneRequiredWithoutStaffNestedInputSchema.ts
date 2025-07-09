import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutStaffInputSchema } from './UserCreateOrConnectWithoutStaffInputSchema'
import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema'
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema'
import { UserUncheckedUpdateWithoutStaffInputSchema } from './UserUncheckedUpdateWithoutStaffInputSchema'
import { UserUpdateToOneWithWhereWithoutStaffInputSchema } from './UserUpdateToOneWithWhereWithoutStaffInputSchema'
import { UserUpdateWithoutStaffInputSchema } from './UserUpdateWithoutStaffInputSchema'
import { UserUpsertWithoutStaffInputSchema } from './UserUpsertWithoutStaffInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserUpdateOneRequiredWithoutStaffNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStaffNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutStaffInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStaffInputSchema).optional(),
			upsert: z.lazy(() => UserUpsertWithoutStaffInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutStaffInputSchema),
					z.lazy(() => UserUpdateWithoutStaffInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutStaffInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutStaffNestedInputSchema
