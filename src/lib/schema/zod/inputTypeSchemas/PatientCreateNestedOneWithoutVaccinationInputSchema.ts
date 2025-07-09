import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutVaccinationInputSchema } from './PatientCreateOrConnectWithoutVaccinationInputSchema'
import { PatientCreateWithoutVaccinationInputSchema } from './PatientCreateWithoutVaccinationInputSchema'
import { PatientUncheckedCreateWithoutVaccinationInputSchema } from './PatientUncheckedCreateWithoutVaccinationInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateNestedOneWithoutVaccinationInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutVaccinationInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutVaccinationInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutVaccinationInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutVaccinationInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
		})
		.strict()

export default PatientCreateNestedOneWithoutVaccinationInputSchema
