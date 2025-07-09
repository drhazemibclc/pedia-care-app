import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateManyMedicalRecordInputEnvelopeSchema } from './LabTestCreateManyMedicalRecordInputEnvelopeSchema'
import { LabTestCreateOrConnectWithoutMedicalRecordInputSchema } from './LabTestCreateOrConnectWithoutMedicalRecordInputSchema'
import { LabTestCreateWithoutMedicalRecordInputSchema } from './LabTestCreateWithoutMedicalRecordInputSchema'
import { LabTestScalarWhereInputSchema } from './LabTestScalarWhereInputSchema'
import { LabTestUncheckedCreateWithoutMedicalRecordInputSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInputSchema'
import { LabTestUpdateManyWithWhereWithoutMedicalRecordInputSchema } from './LabTestUpdateManyWithWhereWithoutMedicalRecordInputSchema'
import { LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputSchema } from './LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputSchema'
import { LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputSchema } from './LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputSchema'
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema'

export const LabTestUpdateManyWithoutMedicalRecordNestedInputSchema: z.ZodType<Prisma.LabTestUpdateManyWithoutMedicalRecordNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => LabTestCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestCreateWithoutMedicalRecordInputSchema).array(),
					z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => LabTestCreateManyMedicalRecordInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => LabTestWhereUniqueInputSchema),
					z.lazy(() => LabTestWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => LabTestWhereUniqueInputSchema),
					z.lazy(() => LabTestWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => LabTestWhereUniqueInputSchema),
					z.lazy(() => LabTestWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => LabTestWhereUniqueInputSchema),
					z.lazy(() => LabTestWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => LabTestUpdateManyWithWhereWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestUpdateManyWithWhereWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => LabTestScalarWhereInputSchema),
					z.lazy(() => LabTestScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default LabTestUpdateManyWithoutMedicalRecordNestedInputSchema
