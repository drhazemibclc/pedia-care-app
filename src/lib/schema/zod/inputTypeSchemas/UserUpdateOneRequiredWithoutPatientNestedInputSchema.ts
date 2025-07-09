import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutPatientInputSchema } from './UserCreateOrConnectWithoutPatientInputSchema'
import { UserCreateWithoutPatientInputSchema } from './UserCreateWithoutPatientInputSchema'
import { UserUncheckedCreateWithoutPatientInputSchema } from './UserUncheckedCreateWithoutPatientInputSchema'
import { UserUncheckedUpdateWithoutPatientInputSchema } from './UserUncheckedUpdateWithoutPatientInputSchema'
import { UserUpdateToOneWithWhereWithoutPatientInputSchema } from './UserUpdateToOneWithWhereWithoutPatientInputSchema'
import { UserUpdateWithoutPatientInputSchema } from './UserUpdateWithoutPatientInputSchema'
import { UserUpsertWithoutPatientInputSchema } from './UserUpsertWithoutPatientInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserUpdateOneRequiredWithoutPatientNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPatientNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutPatientInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutPatientInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPatientInputSchema).optional(),
			upsert: z.lazy(() => UserUpsertWithoutPatientInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutPatientInputSchema),
					z.lazy(() => UserUpdateWithoutPatientInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutPatientInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutPatientNestedInputSchema
