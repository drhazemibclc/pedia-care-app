import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutPatientInputSchema } from './UserCreateOrConnectWithoutPatientInputSchema'
import { UserCreateWithoutPatientInputSchema } from './UserCreateWithoutPatientInputSchema'
import { UserUncheckedCreateWithoutPatientInputSchema } from './UserUncheckedCreateWithoutPatientInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutPatientInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPatientInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutPatientInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutPatientInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPatientInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutPatientInputSchema
