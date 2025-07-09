import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateManyServiceInputSchema } from './PatientBillsCreateManyServiceInputSchema'

export const PatientBillsCreateManyServiceInputEnvelopeSchema: z.ZodType<Prisma.PatientBillsCreateManyServiceInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PatientBillsCreateManyServiceInputSchema),
				z.lazy(() => PatientBillsCreateManyServiceInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PatientBillsCreateManyServiceInputEnvelopeSchema
