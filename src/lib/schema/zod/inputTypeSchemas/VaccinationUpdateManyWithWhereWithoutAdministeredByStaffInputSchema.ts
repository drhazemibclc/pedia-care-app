import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationScalarWhereInputSchema } from './VaccinationScalarWhereInputSchema'
import { VaccinationUncheckedUpdateManyWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedUpdateManyWithoutAdministeredByStaffInputSchema'
import { VaccinationUpdateManyMutationInputSchema } from './VaccinationUpdateManyMutationInputSchema'

export const VaccinationUpdateManyWithWhereWithoutAdministeredByStaffInputSchema: z.ZodType<Prisma.VaccinationUpdateManyWithWhereWithoutAdministeredByStaffInput> =
	z
		.object({
			where: z.lazy(() => VaccinationScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => VaccinationUpdateManyMutationInputSchema),
				z.lazy(() => VaccinationUncheckedUpdateManyWithoutAdministeredByStaffInputSchema),
			]),
		})
		.strict()

export default VaccinationUpdateManyWithWhereWithoutAdministeredByStaffInputSchema
