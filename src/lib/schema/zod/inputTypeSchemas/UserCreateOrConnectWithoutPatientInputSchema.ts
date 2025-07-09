import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutPatientInputSchema } from './UserCreateWithoutPatientInputSchema'
import { UserUncheckedCreateWithoutPatientInputSchema } from './UserUncheckedCreateWithoutPatientInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutPatientInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutPatientInputSchema
