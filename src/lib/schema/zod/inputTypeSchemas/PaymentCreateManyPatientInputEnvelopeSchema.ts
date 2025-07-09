import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateManyPatientInputSchema } from './PaymentCreateManyPatientInputSchema'

export const PaymentCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyPatientInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PaymentCreateManyPatientInputSchema),
				z.lazy(() => PaymentCreateManyPatientInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PaymentCreateManyPatientInputEnvelopeSchema
