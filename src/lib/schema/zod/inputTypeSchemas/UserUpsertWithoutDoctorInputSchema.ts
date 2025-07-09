import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutDoctorInputSchema } from './UserCreateWithoutDoctorInputSchema'
import { UserUncheckedCreateWithoutDoctorInputSchema } from './UserUncheckedCreateWithoutDoctorInputSchema'
import { UserUncheckedUpdateWithoutDoctorInputSchema } from './UserUncheckedUpdateWithoutDoctorInputSchema'
import { UserUpdateWithoutDoctorInputSchema } from './UserUpdateWithoutDoctorInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutDoctorInputSchema: z.ZodType<Prisma.UserUpsertWithoutDoctorInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutDoctorInputSchema),
			z.lazy(() => UserUncheckedUpdateWithoutDoctorInputSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutDoctorInputSchema),
			z.lazy(() => UserUncheckedCreateWithoutDoctorInputSchema),
		]),
		where: z.lazy(() => UserWhereInputSchema).optional(),
	})
	.strict()

export default UserUpsertWithoutDoctorInputSchema
