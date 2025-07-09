import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema'
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => StaffWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => StaffCreateWithoutUserInputSchema),
				z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict()

export default StaffCreateOrConnectWithoutUserInputSchema
