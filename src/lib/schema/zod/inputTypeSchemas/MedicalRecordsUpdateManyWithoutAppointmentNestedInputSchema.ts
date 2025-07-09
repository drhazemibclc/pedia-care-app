import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyAppointmentInputEnvelopeSchema } from './MedicalRecordsCreateManyAppointmentInputEnvelopeSchema'
import { MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema } from './MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema'
import { MedicalRecordsCreateWithoutAppointmentInputSchema } from './MedicalRecordsCreateWithoutAppointmentInputSchema'
import { MedicalRecordsScalarWhereInputSchema } from './MedicalRecordsScalarWhereInputSchema'
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema'
import { MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputSchema } from './MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputSchema'
import { MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputSchema } from './MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputSchema'
import { MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputSchema } from './MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithoutAppointmentNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputSchema).array(),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => MedicalRecordsCreateManyAppointmentInputEnvelopeSchema).optional(),
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
					z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputSchema).array(),
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

export default MedicalRecordsUpdateManyWithoutAppointmentNestedInputSchema
