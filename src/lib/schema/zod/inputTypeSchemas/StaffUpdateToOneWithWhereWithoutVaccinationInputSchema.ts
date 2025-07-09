import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffUncheckedUpdateWithoutVaccinationInputSchema } from './StaffUncheckedUpdateWithoutVaccinationInputSchema'
import { StaffUpdateWithoutVaccinationInputSchema } from './StaffUpdateWithoutVaccinationInputSchema'
import { StaffWhereInputSchema } from './StaffWhereInputSchema'

export const StaffUpdateToOneWithWhereWithoutVaccinationInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutVaccinationInput> =
	z
		.object({
			where: z.lazy(() => StaffWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => StaffUpdateWithoutVaccinationInputSchema),
				z.lazy(() => StaffUncheckedUpdateWithoutVaccinationInputSchema),
			]),
		})
		.strict()

export default StaffUpdateToOneWithWhereWithoutVaccinationInputSchema
