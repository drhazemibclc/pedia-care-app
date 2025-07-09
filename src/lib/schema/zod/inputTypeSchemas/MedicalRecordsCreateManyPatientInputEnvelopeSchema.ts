import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyPatientInputSchema } from './MedicalRecordsCreateManyPatientInputSchema'

export const MedicalRecordsCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.MedicalRecordsCreateManyPatientInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => MedicalRecordsCreateManyPatientInputSchema),
				z.lazy(() => MedicalRecordsCreateManyPatientInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default MedicalRecordsCreateManyPatientInputEnvelopeSchema
