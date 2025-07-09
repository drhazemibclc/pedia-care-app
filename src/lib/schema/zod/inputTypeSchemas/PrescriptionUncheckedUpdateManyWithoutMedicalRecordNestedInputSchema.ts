import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyMedicalRecordInputEnvelopeSchema } from './PrescriptionCreateManyMedicalRecordInputEnvelopeSchema'
import { PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema } from './PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema'
import { PrescriptionCreateWithoutMedicalRecordInputSchema } from './PrescriptionCreateWithoutMedicalRecordInputSchema'
import { PrescriptionScalarWhereInputSchema } from './PrescriptionScalarWhereInputSchema'
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema'
import { PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputSchema } from './PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputSchema'
import { PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputSchema } from './PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputSchema'
import { PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputSchema } from './PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema: z.ZodType<Prisma.PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputSchema).array(),
					z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PrescriptionCreateManyMedicalRecordInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => PrescriptionScalarWhereInputSchema),
					z.lazy(() => PrescriptionScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema
