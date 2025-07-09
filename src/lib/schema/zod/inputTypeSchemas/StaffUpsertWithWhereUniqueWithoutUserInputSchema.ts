import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema'
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema'
import { StaffUncheckedUpdateWithoutUserInputSchema } from './StaffUncheckedUpdateWithoutUserInputSchema'
import { StaffUpdateWithoutUserInputSchema } from './StaffUpdateWithoutUserInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.StaffUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => StaffWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => StaffUpdateWithoutUserInputSchema),
				z.lazy(() => StaffUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => StaffCreateWithoutUserInputSchema),
				z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict()

export default StaffUpsertWithWhereUniqueWithoutUserInputSchema
