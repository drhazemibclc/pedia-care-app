import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentUncheckedUpdateWithoutAppointmentInputSchema } from './PaymentUncheckedUpdateWithoutAppointmentInputSchema'
import { PaymentUpdateWithoutAppointmentInputSchema } from './PaymentUpdateWithoutAppointmentInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUpdateWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PaymentUpdateWithoutAppointmentInputSchema),
				z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default PaymentUpdateWithWhereUniqueWithoutAppointmentInputSchema
