import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutDoctorInputSchema } from './UserCreateOrConnectWithoutDoctorInputSchema'
import { UserCreateWithoutDoctorInputSchema } from './UserCreateWithoutDoctorInputSchema'
import { UserUncheckedCreateWithoutDoctorInputSchema } from './UserUncheckedCreateWithoutDoctorInputSchema'
import { UserUncheckedUpdateWithoutDoctorInputSchema } from './UserUncheckedUpdateWithoutDoctorInputSchema'
import { UserUpdateToOneWithWhereWithoutDoctorInputSchema } from './UserUpdateToOneWithWhereWithoutDoctorInputSchema'
import { UserUpdateWithoutDoctorInputSchema } from './UserUpdateWithoutDoctorInputSchema'
import { UserUpsertWithoutDoctorInputSchema } from './UserUpsertWithoutDoctorInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserUpdateOneRequiredWithoutDoctorNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutDoctorInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutDoctorInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDoctorInputSchema).optional(),
			upsert: z.lazy(() => UserUpsertWithoutDoctorInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutDoctorInputSchema),
					z.lazy(() => UserUpdateWithoutDoctorInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutDoctorInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutDoctorNestedInputSchema
