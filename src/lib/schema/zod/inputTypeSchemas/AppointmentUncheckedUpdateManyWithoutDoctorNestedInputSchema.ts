import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyDoctorInputEnvelopeSchema } from './AppointmentCreateManyDoctorInputEnvelopeSchema'
import { AppointmentCreateOrConnectWithoutDoctorInputSchema } from './AppointmentCreateOrConnectWithoutDoctorInputSchema'
import { AppointmentCreateWithoutDoctorInputSchema } from './AppointmentCreateWithoutDoctorInputSchema'
import { AppointmentScalarWhereInputSchema } from './AppointmentScalarWhereInputSchema'
import { AppointmentUncheckedCreateWithoutDoctorInputSchema } from './AppointmentUncheckedCreateWithoutDoctorInputSchema'
import { AppointmentUpdateManyWithWhereWithoutDoctorInputSchema } from './AppointmentUpdateManyWithWhereWithoutDoctorInputSchema'
import { AppointmentUpdateWithWhereUniqueWithoutDoctorInputSchema } from './AppointmentUpdateWithWhereUniqueWithoutDoctorInputSchema'
import { AppointmentUpsertWithWhereUniqueWithoutDoctorInputSchema } from './AppointmentUpsertWithWhereUniqueWithoutDoctorInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutDoctorNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutDoctorInputSchema),
					z.lazy(() => AppointmentCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AppointmentCreateManyDoctorInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => AppointmentWhereUniqueInputSchema),
					z.lazy(() => AppointmentWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => AppointmentWhereUniqueInputSchema),
					z.lazy(() => AppointmentWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => AppointmentWhereUniqueInputSchema),
					z.lazy(() => AppointmentWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => AppointmentWhereUniqueInputSchema),
					z.lazy(() => AppointmentWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => AppointmentUpdateManyWithWhereWithoutDoctorInputSchema),
					z.lazy(() => AppointmentUpdateManyWithWhereWithoutDoctorInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => AppointmentScalarWhereInputSchema),
					z.lazy(() => AppointmentScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema
