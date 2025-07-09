import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateManyMedicalRecordInputSchema } from './LabTestCreateManyMedicalRecordInputSchema'

export const LabTestCreateManyMedicalRecordInputEnvelopeSchema: z.ZodType<Prisma.LabTestCreateManyMedicalRecordInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => LabTestCreateManyMedicalRecordInputSchema),
				z.lazy(() => LabTestCreateManyMedicalRecordInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default LabTestCreateManyMedicalRecordInputEnvelopeSchema
