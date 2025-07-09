import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationUncheckedUpdateWithoutPatientInputSchema } from './VaccinationUncheckedUpdateWithoutPatientInputSchema'
import { VaccinationUpdateWithoutPatientInputSchema } from './VaccinationUpdateWithoutPatientInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.VaccinationUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => VaccinationWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => VaccinationUpdateWithoutPatientInputSchema),
				z.lazy(() => VaccinationUncheckedUpdateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default VaccinationUpdateWithWhereUniqueWithoutPatientInputSchema
