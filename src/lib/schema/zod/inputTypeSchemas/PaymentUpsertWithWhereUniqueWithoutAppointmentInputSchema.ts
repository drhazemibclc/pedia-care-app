import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateWithoutAppointmentInputSchema } from './PaymentCreateWithoutAppointmentInputSchema'
import { PaymentUncheckedCreateWithoutAppointmentInputSchema } from './PaymentUncheckedCreateWithoutAppointmentInputSchema'
import { PaymentUncheckedUpdateWithoutAppointmentInputSchema } from './PaymentUncheckedUpdateWithoutAppointmentInputSchema'
import { PaymentUpdateWithoutAppointmentInputSchema } from './PaymentUpdateWithoutAppointmentInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUpsertWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PaymentUpdateWithoutAppointmentInputSchema),
				z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputSchema),
			]),
			create: z.union([
				z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),
				z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default PaymentUpsertWithWhereUniqueWithoutAppointmentInputSchema
