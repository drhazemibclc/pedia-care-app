import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateManyAppointmentInputSchema } from './PaymentCreateManyAppointmentInputSchema'

export const PaymentCreateManyAppointmentInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyAppointmentInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PaymentCreateManyAppointmentInputSchema),
				z.lazy(() => PaymentCreateManyAppointmentInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PaymentCreateManyAppointmentInputEnvelopeSchema
