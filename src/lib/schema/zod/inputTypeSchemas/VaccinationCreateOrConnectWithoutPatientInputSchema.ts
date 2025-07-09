import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateWithoutPatientInputSchema } from './VaccinationCreateWithoutPatientInputSchema'
import { VaccinationUncheckedCreateWithoutPatientInputSchema } from './VaccinationUncheckedCreateWithoutPatientInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.VaccinationCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => VaccinationWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => VaccinationCreateWithoutPatientInputSchema),
				z.lazy(() => VaccinationUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default VaccinationCreateOrConnectWithoutPatientInputSchema
