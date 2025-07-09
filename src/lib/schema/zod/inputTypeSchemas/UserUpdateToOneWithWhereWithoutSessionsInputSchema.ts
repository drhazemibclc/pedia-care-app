import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserUncheckedUpdateWithoutSessionsInputSchema } from './UserUncheckedUpdateWithoutSessionsInputSchema'
import { UserUpdateWithoutSessionsInputSchema } from './UserUpdateWithoutSessionsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutSessionsInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutSessionsInputSchema
