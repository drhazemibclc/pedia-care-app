import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyPatientInputEnvelopeSchema } from './AppointmentCreateManyPatientInputEnvelopeSchema'
import { AppointmentCreateOrConnectWithoutPatientInputSchema } from './AppointmentCreateOrConnectWithoutPatientInputSchema'
import { AppointmentCreateWithoutPatientInputSchema } from './AppointmentCreateWithoutPatientInputSchema'
import { AppointmentScalarWhereInputSchema } from './AppointmentScalarWhereInputSchema'
import { AppointmentUncheckedCreateWithoutPatientInputSchema } from './AppointmentUncheckedCreateWithoutPatientInputSchema'
import { AppointmentUpdateManyWithWhereWithoutPatientInputSchema } from './AppointmentUpdateManyWithWhereWithoutPatientInputSchema'
import { AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema } from './AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema'
import { AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema } from './AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutPatientNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutPatientInputSchema),
					z.lazy(() => AppointmentCreateWithoutPatientInputSchema).array(),
					z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeSchema).optional(),
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
					z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputSchema),
					z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputSchema).array(),
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

export default AppointmentUpdateManyWithoutPatientNestedInputSchema
