import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyMedicalInputSchema } from './DiagnosisCreateManyMedicalInputSchema'

export const DiagnosisCreateManyMedicalInputEnvelopeSchema: z.ZodType<Prisma.DiagnosisCreateManyMedicalInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => DiagnosisCreateManyMedicalInputSchema),
				z.lazy(() => DiagnosisCreateManyMedicalInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default DiagnosisCreateManyMedicalInputEnvelopeSchema
