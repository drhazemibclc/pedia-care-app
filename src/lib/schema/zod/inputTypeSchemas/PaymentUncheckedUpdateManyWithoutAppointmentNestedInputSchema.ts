import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateManyAppointmentInputEnvelopeSchema } from './PaymentCreateManyAppointmentInputEnvelopeSchema'
import { PaymentCreateOrConnectWithoutAppointmentInputSchema } from './PaymentCreateOrConnectWithoutAppointmentInputSchema'
import { PaymentCreateWithoutAppointmentInputSchema } from './PaymentCreateWithoutAppointmentInputSchema'
import { PaymentScalarWhereInputSchema } from './PaymentScalarWhereInputSchema'
import { PaymentUncheckedCreateWithoutAppointmentInputSchema } from './PaymentUncheckedCreateWithoutAppointmentInputSchema'
import { PaymentUpdateManyWithWhereWithoutAppointmentInputSchema } from './PaymentUpdateManyWithWhereWithoutAppointmentInputSchema'
import { PaymentUpdateWithWhereUniqueWithoutAppointmentInputSchema } from './PaymentUpdateWithWhereUniqueWithoutAppointmentInputSchema'
import { PaymentUpsertWithWhereUniqueWithoutAppointmentInputSchema } from './PaymentUpsertWithWhereUniqueWithoutAppointmentInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUncheckedUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutAppointmentNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),
					z.lazy(() => PaymentCreateWithoutAppointmentInputSchema).array(),
					z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema),
					z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputSchema),
					z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => PaymentUpsertWithWhereUniqueWithoutAppointmentInputSchema),
					z.lazy(() => PaymentUpsertWithWhereUniqueWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PaymentCreateManyAppointmentInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => PaymentUpdateWithWhereUniqueWithoutAppointmentInputSchema),
					z.lazy(() => PaymentUpdateWithWhereUniqueWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PaymentUpdateManyWithWhereWithoutAppointmentInputSchema),
					z.lazy(() => PaymentUpdateManyWithWhereWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => PaymentScalarWhereInputSchema),
					z.lazy(() => PaymentScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PaymentUncheckedUpdateManyWithoutAppointmentNestedInputSchema
