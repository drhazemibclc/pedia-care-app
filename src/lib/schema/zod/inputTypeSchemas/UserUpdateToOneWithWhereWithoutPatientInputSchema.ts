import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserUncheckedUpdateWithoutPatientInputSchema } from './UserUncheckedUpdateWithoutPatientInputSchema'
import { UserUpdateWithoutPatientInputSchema } from './UserUpdateWithoutPatientInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpdateToOneWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutPatientInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutPatientInputSchema
