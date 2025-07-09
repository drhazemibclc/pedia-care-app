import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffUncheckedUpdateWithoutUserInputSchema } from './StaffUncheckedUpdateWithoutUserInputSchema'
import { StaffUpdateWithoutUserInputSchema } from './StaffUpdateWithoutUserInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.StaffUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => StaffWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => StaffUpdateWithoutUserInputSchema),
				z.lazy(() => StaffUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict()

export default StaffUpdateWithWhereUniqueWithoutUserInputSchema
