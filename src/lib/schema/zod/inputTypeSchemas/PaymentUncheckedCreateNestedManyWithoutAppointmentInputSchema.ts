import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateManyAppointmentInputEnvelopeSchema } from './PaymentCreateManyAppointmentInputEnvelopeSchema'
import { PaymentCreateOrConnectWithoutAppointmentInputSchema } from './PaymentCreateOrConnectWithoutAppointmentInputSchema'
import { PaymentCreateWithoutAppointmentInputSchema } from './PaymentCreateWithoutAppointmentInputSchema'
import { PaymentUncheckedCreateWithoutAppointmentInputSchema } from './PaymentUncheckedCreateWithoutAppointmentInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUncheckedCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutAppointmentInput> =
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
			createMany: z.lazy(() => PaymentCreateManyAppointmentInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PaymentUncheckedCreateNestedManyWithoutAppointmentInputSchema
