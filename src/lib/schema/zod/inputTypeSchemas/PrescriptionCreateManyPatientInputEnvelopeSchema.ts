import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyPatientInputSchema } from './PrescriptionCreateManyPatientInputSchema'

export const PrescriptionCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.PrescriptionCreateManyPatientInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PrescriptionCreateManyPatientInputSchema),
				z.lazy(() => PrescriptionCreateManyPatientInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PrescriptionCreateManyPatientInputEnvelopeSchema
