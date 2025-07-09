import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationScalarWhereInputSchema } from './VaccinationScalarWhereInputSchema'
import { VaccinationUncheckedUpdateManyWithoutPatientInputSchema } from './VaccinationUncheckedUpdateManyWithoutPatientInputSchema'
import { VaccinationUpdateManyMutationInputSchema } from './VaccinationUpdateManyMutationInputSchema'

export const VaccinationUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.VaccinationUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => VaccinationScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => VaccinationUpdateManyMutationInputSchema),
				z.lazy(() => VaccinationUncheckedUpdateManyWithoutPatientInputSchema),
			]),
		})
		.strict()

export default VaccinationUpdateManyWithWhereWithoutPatientInputSchema
