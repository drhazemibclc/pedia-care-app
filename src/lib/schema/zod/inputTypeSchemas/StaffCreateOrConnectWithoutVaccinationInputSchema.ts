import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateWithoutVaccinationInputSchema } from './StaffCreateWithoutVaccinationInputSchema'
import { StaffUncheckedCreateWithoutVaccinationInputSchema } from './StaffUncheckedCreateWithoutVaccinationInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffCreateOrConnectWithoutVaccinationInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutVaccinationInput> =
	z
		.object({
			where: z.lazy(() => StaffWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => StaffCreateWithoutVaccinationInputSchema),
				z.lazy(() => StaffUncheckedCreateWithoutVaccinationInputSchema),
			]),
		})
		.strict()

export default StaffCreateOrConnectWithoutVaccinationInputSchema
