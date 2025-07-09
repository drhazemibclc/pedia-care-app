import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyPatientInputEnvelopeSchema } from './MedicalRecordsCreateManyPatientInputEnvelopeSchema'
import { MedicalRecordsCreateOrConnectWithoutPatientInputSchema } from './MedicalRecordsCreateOrConnectWithoutPatientInputSchema'
import { MedicalRecordsCreateWithoutPatientInputSchema } from './MedicalRecordsCreateWithoutPatientInputSchema'
import { MedicalRecordsScalarWhereInputSchema } from './MedicalRecordsScalarWhereInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPatientInputSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInputSchema'
import { MedicalRecordsUpdateManyWithWhereWithoutPatientInputSchema } from './MedicalRecordsUpdateManyWithWhereWithoutPatientInputSchema'
import { MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputSchema } from './MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputSchema'
import { MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputSchema } from './MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsCreateWithoutPatientInputSchema).array(),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => MedicalRecordsCreateManyPatientInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutPatientInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => MedicalRecordsScalarWhereInputSchema),
					z.lazy(() => MedicalRecordsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema
