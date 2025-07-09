import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutVaccinationInputSchema } from './PatientCreateWithoutVaccinationInputSchema'
import { PatientUncheckedCreateWithoutVaccinationInputSchema } from './PatientUncheckedCreateWithoutVaccinationInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateOrConnectWithoutVaccinationInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutVaccinationInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutVaccinationInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutVaccinationInputSchema),
			]),
		})
		.strict()

export default PatientCreateOrConnectWithoutVaccinationInputSchema
