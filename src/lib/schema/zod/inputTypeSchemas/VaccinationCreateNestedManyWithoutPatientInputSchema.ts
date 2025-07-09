import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateManyPatientInputEnvelopeSchema } from './VaccinationCreateManyPatientInputEnvelopeSchema'
import { VaccinationCreateOrConnectWithoutPatientInputSchema } from './VaccinationCreateOrConnectWithoutPatientInputSchema'
import { VaccinationCreateWithoutPatientInputSchema } from './VaccinationCreateWithoutPatientInputSchema'
import { VaccinationUncheckedCreateWithoutPatientInputSchema } from './VaccinationUncheckedCreateWithoutPatientInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.VaccinationCreateNestedManyWithoutPatientInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => VaccinationCreateWithoutPatientInputSchema),
					z.lazy(() => VaccinationCreateWithoutPatientInputSchema).array(),
					z.lazy(() => VaccinationUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => VaccinationUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => VaccinationCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => VaccinationCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => VaccinationCreateManyPatientInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default VaccinationCreateNestedManyWithoutPatientInputSchema
