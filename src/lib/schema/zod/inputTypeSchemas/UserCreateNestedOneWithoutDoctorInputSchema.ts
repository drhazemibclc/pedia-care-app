import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutDoctorInputSchema } from './UserCreateOrConnectWithoutDoctorInputSchema'
import { UserCreateWithoutDoctorInputSchema } from './UserCreateWithoutDoctorInputSchema'
import { UserUncheckedCreateWithoutDoctorInputSchema } from './UserUncheckedCreateWithoutDoctorInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutDoctorInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDoctorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutDoctorInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutDoctorInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDoctorInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutDoctorInputSchema
