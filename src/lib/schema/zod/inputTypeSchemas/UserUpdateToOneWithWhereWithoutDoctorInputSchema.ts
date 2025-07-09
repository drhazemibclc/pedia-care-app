import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserUncheckedUpdateWithoutDoctorInputSchema } from './UserUncheckedUpdateWithoutDoctorInputSchema'
import { UserUpdateWithoutDoctorInputSchema } from './UserUpdateWithoutDoctorInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpdateToOneWithWhereWithoutDoctorInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutDoctorInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutDoctorInputSchema
