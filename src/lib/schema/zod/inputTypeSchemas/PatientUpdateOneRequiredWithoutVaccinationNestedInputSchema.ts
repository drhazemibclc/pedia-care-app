import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutVaccinationInputSchema } from './PatientCreateOrConnectWithoutVaccinationInputSchema'
import { PatientCreateWithoutVaccinationInputSchema } from './PatientCreateWithoutVaccinationInputSchema'
import { PatientUncheckedCreateWithoutVaccinationInputSchema } from './PatientUncheckedCreateWithoutVaccinationInputSchema'
import { PatientUncheckedUpdateWithoutVaccinationInputSchema } from './PatientUncheckedUpdateWithoutVaccinationInputSchema'
import { PatientUpdateToOneWithWhereWithoutVaccinationInputSchema } from './PatientUpdateToOneWithWhereWithoutVaccinationInputSchema'
import { PatientUpdateWithoutVaccinationInputSchema } from './PatientUpdateWithoutVaccinationInputSchema'
import { PatientUpsertWithoutVaccinationInputSchema } from './PatientUpsertWithoutVaccinationInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateOneRequiredWithoutVaccinationNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutVaccinationNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutVaccinationInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutVaccinationInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutVaccinationInputSchema).optional(),
			upsert: z.lazy(() => PatientUpsertWithoutVaccinationInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => PatientUpdateToOneWithWhereWithoutVaccinationInputSchema),
					z.lazy(() => PatientUpdateWithoutVaccinationInputSchema),
					z.lazy(() => PatientUncheckedUpdateWithoutVaccinationInputSchema),
				])
				.optional(),
		})
		.strict()

export default PatientUpdateOneRequiredWithoutVaccinationNestedInputSchema
