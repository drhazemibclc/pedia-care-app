import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutVaccinationInputSchema } from './PatientCreateWithoutVaccinationInputSchema'
import { PatientUncheckedCreateWithoutVaccinationInputSchema } from './PatientUncheckedCreateWithoutVaccinationInputSchema'
import { PatientUncheckedUpdateWithoutVaccinationInputSchema } from './PatientUncheckedUpdateWithoutVaccinationInputSchema'
import { PatientUpdateWithoutVaccinationInputSchema } from './PatientUpdateWithoutVaccinationInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpsertWithoutVaccinationInputSchema: z.ZodType<Prisma.PatientUpsertWithoutVaccinationInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => PatientUpdateWithoutVaccinationInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutVaccinationInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientCreateWithoutVaccinationInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutVaccinationInputSchema),
			]),
			where: z.lazy(() => PatientWhereInputSchema).optional(),
		})
		.strict()

export default PatientUpsertWithoutVaccinationInputSchema
