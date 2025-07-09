import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateWithoutVaccinationInputSchema } from './PatientUncheckedUpdateWithoutVaccinationInputSchema'
import { PatientUpdateWithoutVaccinationInputSchema } from './PatientUpdateWithoutVaccinationInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpdateToOneWithWhereWithoutVaccinationInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutVaccinationInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => PatientUpdateWithoutVaccinationInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutVaccinationInputSchema),
			]),
		})
		.strict()

export default PatientUpdateToOneWithWhereWithoutVaccinationInputSchema
