import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateWithoutPatientInputSchema } from './VaccinationCreateWithoutPatientInputSchema'
import { VaccinationUncheckedCreateWithoutPatientInputSchema } from './VaccinationUncheckedCreateWithoutPatientInputSchema'
import { VaccinationUncheckedUpdateWithoutPatientInputSchema } from './VaccinationUncheckedUpdateWithoutPatientInputSchema'
import { VaccinationUpdateWithoutPatientInputSchema } from './VaccinationUpdateWithoutPatientInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.VaccinationUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => VaccinationWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => VaccinationUpdateWithoutPatientInputSchema),
				z.lazy(() => VaccinationUncheckedUpdateWithoutPatientInputSchema),
			]),
			create: z.union([
				z.lazy(() => VaccinationCreateWithoutPatientInputSchema),
				z.lazy(() => VaccinationUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default VaccinationUpsertWithWhereUniqueWithoutPatientInputSchema
