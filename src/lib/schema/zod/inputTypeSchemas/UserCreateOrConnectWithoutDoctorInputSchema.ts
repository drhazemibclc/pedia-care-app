import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutDoctorInputSchema } from './UserCreateWithoutDoctorInputSchema'
import { UserUncheckedCreateWithoutDoctorInputSchema } from './UserUncheckedCreateWithoutDoctorInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateOrConnectWithoutDoctorInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutDoctorInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutDoctorInputSchema
