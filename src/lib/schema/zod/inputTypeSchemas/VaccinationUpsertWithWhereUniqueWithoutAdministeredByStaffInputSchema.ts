import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateWithoutAdministeredByStaffInputSchema } from './VaccinationCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationUncheckedUpdateWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedUpdateWithoutAdministeredByStaffInputSchema'
import { VaccinationUpdateWithoutAdministeredByStaffInputSchema } from './VaccinationUpdateWithoutAdministeredByStaffInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationUpsertWithWhereUniqueWithoutAdministeredByStaffInputSchema: z.ZodType<Prisma.VaccinationUpsertWithWhereUniqueWithoutAdministeredByStaffInput> =
	z
		.object({
			where: z.lazy(() => VaccinationWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => VaccinationUpdateWithoutAdministeredByStaffInputSchema),
				z.lazy(() => VaccinationUncheckedUpdateWithoutAdministeredByStaffInputSchema),
			]),
			create: z.union([
				z.lazy(() => VaccinationCreateWithoutAdministeredByStaffInputSchema),
				z.lazy(() => VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema),
			]),
		})
		.strict()

export default VaccinationUpsertWithWhereUniqueWithoutAdministeredByStaffInputSchema
