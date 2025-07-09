import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateWithoutAppointmentInputSchema } from './PaymentCreateWithoutAppointmentInputSchema'
import { PaymentUncheckedCreateWithoutAppointmentInputSchema } from './PaymentUncheckedCreateWithoutAppointmentInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentCreateOrConnectWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),
				z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default PaymentCreateOrConnectWithoutAppointmentInputSchema
