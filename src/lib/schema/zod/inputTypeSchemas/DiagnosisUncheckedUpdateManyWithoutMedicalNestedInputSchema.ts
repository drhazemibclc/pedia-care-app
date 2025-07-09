import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyMedicalInputEnvelopeSchema } from './DiagnosisCreateManyMedicalInputEnvelopeSchema'
import { DiagnosisCreateOrConnectWithoutMedicalInputSchema } from './DiagnosisCreateOrConnectWithoutMedicalInputSchema'
import { DiagnosisCreateWithoutMedicalInputSchema } from './DiagnosisCreateWithoutMedicalInputSchema'
import { DiagnosisScalarWhereInputSchema } from './DiagnosisScalarWhereInputSchema'
import { DiagnosisUncheckedCreateWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateWithoutMedicalInputSchema'
import { DiagnosisUpdateManyWithWhereWithoutMedicalInputSchema } from './DiagnosisUpdateManyWithWhereWithoutMedicalInputSchema'
import { DiagnosisUpdateWithWhereUniqueWithoutMedicalInputSchema } from './DiagnosisUpdateWithWhereUniqueWithoutMedicalInputSchema'
import { DiagnosisUpsertWithWhereUniqueWithoutMedicalInputSchema } from './DiagnosisUpsertWithWhereUniqueWithoutMedicalInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema: z.ZodType<Prisma.DiagnosisUncheckedUpdateManyWithoutMedicalNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DiagnosisCreateWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisCreateWithoutMedicalInputSchema).array(),
					z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutMedicalInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => DiagnosisCreateManyMedicalInputEnvelopeSchema).optional(),
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
					z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutMedicalInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => DiagnosisUpdateManyWithWhereWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisUpdateManyWithWhereWithoutMedicalInputSchema).array(),
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

export default DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema
