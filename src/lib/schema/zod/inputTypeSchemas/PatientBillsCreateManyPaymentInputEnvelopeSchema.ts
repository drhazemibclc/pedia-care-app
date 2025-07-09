import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateManyPaymentInputSchema } from './PatientBillsCreateManyPaymentInputSchema'

export const PatientBillsCreateManyPaymentInputEnvelopeSchema: z.ZodType<Prisma.PatientBillsCreateManyPaymentInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PatientBillsCreateManyPaymentInputSchema),
				z.lazy(() => PatientBillsCreateManyPaymentInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PatientBillsCreateManyPaymentInputEnvelopeSchema
