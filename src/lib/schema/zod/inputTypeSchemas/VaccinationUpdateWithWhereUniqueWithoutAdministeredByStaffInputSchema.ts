import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationUncheckedUpdateWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedUpdateWithoutAdministeredByStaffInputSchema'
import { VaccinationUpdateWithoutAdministeredByStaffInputSchema } from './VaccinationUpdateWithoutAdministeredByStaffInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationUpdateWithWhereUniqueWithoutAdministeredByStaffInputSchema: z.ZodType<Prisma.VaccinationUpdateWithWhereUniqueWithoutAdministeredByStaffInput> =
	z
		.object({
			where: z.lazy(() => VaccinationWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => VaccinationUpdateWithoutAdministeredByStaffInputSchema),
				z.lazy(() => VaccinationUncheckedUpdateWithoutAdministeredByStaffInputSchema),
			]),
		})
		.strict()

export default VaccinationUpdateWithWhereUniqueWithoutAdministeredByStaffInputSchema
