import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyMedicalRecordInputSchema } from './PrescriptionCreateManyMedicalRecordInputSchema'

export const PrescriptionCreateManyMedicalRecordInputEnvelopeSchema: z.ZodType<Prisma.PrescriptionCreateManyMedicalRecordInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PrescriptionCreateManyMedicalRecordInputSchema),
				z.lazy(() => PrescriptionCreateManyMedicalRecordInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PrescriptionCreateManyMedicalRecordInputEnvelopeSchema
