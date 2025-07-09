import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyServiceInputEnvelopeSchema } from './AppointmentCreateManyServiceInputEnvelopeSchema'
import { AppointmentCreateOrConnectWithoutServiceInputSchema } from './AppointmentCreateOrConnectWithoutServiceInputSchema'
import { AppointmentCreateWithoutServiceInputSchema } from './AppointmentCreateWithoutServiceInputSchema'
import { AppointmentScalarWhereInputSchema } from './AppointmentScalarWhereInputSchema'
import { AppointmentUncheckedCreateWithoutServiceInputSchema } from './AppointmentUncheckedCreateWithoutServiceInputSchema'
import { AppointmentUpdateManyWithWhereWithoutServiceInputSchema } from './AppointmentUpdateManyWithWhereWithoutServiceInputSchema'
import { AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema } from './AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema'
import { AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema } from './AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutServiceNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutServiceInputSchema),
					z.lazy(() => AppointmentCreateWithoutServiceInputSchema).array(),
					z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema),
					z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema),
					z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeSchema).optional(),
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
					z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema),
					z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputSchema),
					z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputSchema).array(),
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

export default AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema
