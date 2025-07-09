import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateWithoutAdministeredByStaffInputSchema } from './VaccinationCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema: z.ZodType<Prisma.VaccinationCreateOrConnectWithoutAdministeredByStaffInput> =
	z
		.object({
			where: z.lazy(() => VaccinationWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => VaccinationCreateWithoutAdministeredByStaffInputSchema),
				z.lazy(() => VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema),
			]),
		})
		.strict()

export default VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema
