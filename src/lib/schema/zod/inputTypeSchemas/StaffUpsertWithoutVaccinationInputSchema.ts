import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateWithoutVaccinationInputSchema } from './StaffCreateWithoutVaccinationInputSchema'
import { StaffUncheckedCreateWithoutVaccinationInputSchema } from './StaffUncheckedCreateWithoutVaccinationInputSchema'
import { StaffUncheckedUpdateWithoutVaccinationInputSchema } from './StaffUncheckedUpdateWithoutVaccinationInputSchema'
import { StaffUpdateWithoutVaccinationInputSchema } from './StaffUpdateWithoutVaccinationInputSchema'
import { StaffWhereInputSchema } from './StaffWhereInputSchema'

export const StaffUpsertWithoutVaccinationInputSchema: z.ZodType<Prisma.StaffUpsertWithoutVaccinationInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => StaffUpdateWithoutVaccinationInputSchema),
				z.lazy(() => StaffUncheckedUpdateWithoutVaccinationInputSchema),
			]),
			create: z.union([
				z.lazy(() => StaffCreateWithoutVaccinationInputSchema),
				z.lazy(() => StaffUncheckedCreateWithoutVaccinationInputSchema),
			]),
			where: z.lazy(() => StaffWhereInputSchema).optional(),
		})
		.strict()

export default StaffUpsertWithoutVaccinationInputSchema
