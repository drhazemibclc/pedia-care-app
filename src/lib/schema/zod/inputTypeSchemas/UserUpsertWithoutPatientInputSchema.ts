import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutPatientInputSchema } from './UserCreateWithoutPatientInputSchema'
import { UserUncheckedCreateWithoutPatientInputSchema } from './UserUncheckedCreateWithoutPatientInputSchema'
import { UserUncheckedUpdateWithoutPatientInputSchema } from './UserUncheckedUpdateWithoutPatientInputSchema'
import { UserUpdateWithoutPatientInputSchema } from './UserUpdateWithoutPatientInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutPatientInputSchema: z.ZodType<Prisma.UserUpsertWithoutPatientInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => UserUpdateWithoutPatientInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutPatientInputSchema),
			]),
			create: z.union([
				z.lazy(() => UserCreateWithoutPatientInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutPatientInputSchema),
			]),
			where: z.lazy(() => UserWhereInputSchema).optional(),
		})
		.strict()

export default UserUpsertWithoutPatientInputSchema
