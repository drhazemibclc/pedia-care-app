import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateManyPatientInputEnvelopeSchema } from './VaccinationCreateManyPatientInputEnvelopeSchema'
import { VaccinationCreateOrConnectWithoutPatientInputSchema } from './VaccinationCreateOrConnectWithoutPatientInputSchema'
import { VaccinationCreateWithoutPatientInputSchema } from './VaccinationCreateWithoutPatientInputSchema'
import { VaccinationScalarWhereInputSchema } from './VaccinationScalarWhereInputSchema'
import { VaccinationUncheckedCreateWithoutPatientInputSchema } from './VaccinationUncheckedCreateWithoutPatientInputSchema'
import { VaccinationUpdateManyWithWhereWithoutPatientInputSchema } from './VaccinationUpdateManyWithWhereWithoutPatientInputSchema'
import { VaccinationUpdateWithWhereUniqueWithoutPatientInputSchema } from './VaccinationUpdateWithWhereUniqueWithoutPatientInputSchema'
import { VaccinationUpsertWithWhereUniqueWithoutPatientInputSchema } from './VaccinationUpsertWithWhereUniqueWithoutPatientInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.VaccinationUpdateManyWithoutPatientNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => VaccinationUpsertWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => VaccinationUpsertWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => VaccinationCreateManyPatientInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => VaccinationUpdateWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => VaccinationUpdateWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => VaccinationUpdateManyWithWhereWithoutPatientInputSchema),
					z.lazy(() => VaccinationUpdateManyWithWhereWithoutPatientInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => VaccinationScalarWhereInputSchema),
					z.lazy(() => VaccinationScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default VaccinationUpdateManyWithoutPatientNestedInputSchema
