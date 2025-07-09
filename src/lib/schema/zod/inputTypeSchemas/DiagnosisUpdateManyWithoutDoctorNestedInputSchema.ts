import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyDoctorInputEnvelopeSchema } from './DiagnosisCreateManyDoctorInputEnvelopeSchema'
import { DiagnosisCreateOrConnectWithoutDoctorInputSchema } from './DiagnosisCreateOrConnectWithoutDoctorInputSchema'
import { DiagnosisCreateWithoutDoctorInputSchema } from './DiagnosisCreateWithoutDoctorInputSchema'
import { DiagnosisScalarWhereInputSchema } from './DiagnosisScalarWhereInputSchema'
import { DiagnosisUncheckedCreateWithoutDoctorInputSchema } from './DiagnosisUncheckedCreateWithoutDoctorInputSchema'
import { DiagnosisUpdateManyWithWhereWithoutDoctorInputSchema } from './DiagnosisUpdateManyWithWhereWithoutDoctorInputSchema'
import { DiagnosisUpdateWithWhereUniqueWithoutDoctorInputSchema } from './DiagnosisUpdateWithWhereUniqueWithoutDoctorInputSchema'
import { DiagnosisUpsertWithWhereUniqueWithoutDoctorInputSchema } from './DiagnosisUpsertWithWhereUniqueWithoutDoctorInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisUpdateManyWithoutDoctorNestedInputSchema: z.ZodType<Prisma.DiagnosisUpdateManyWithoutDoctorNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DiagnosisCreateWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => DiagnosisCreateManyDoctorInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => DiagnosisWhereUniqueInputSchema),
					z.lazy(() => DiagnosisWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => DiagnosisWhereUniqueInputSchema),
					z.lazy(() => DiagnosisWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => DiagnosisWhereUniqueInputSchema),
					z.lazy(() => DiagnosisWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => DiagnosisWhereUniqueInputSchema),
					z.lazy(() => DiagnosisWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => DiagnosisUpdateManyWithWhereWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisUpdateManyWithWhereWithoutDoctorInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => DiagnosisScalarWhereInputSchema),
					z.lazy(() => DiagnosisScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default DiagnosisUpdateManyWithoutDoctorNestedInputSchema
