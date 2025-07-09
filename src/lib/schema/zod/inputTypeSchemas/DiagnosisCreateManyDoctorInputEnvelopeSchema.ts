import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyDoctorInputSchema } from './DiagnosisCreateManyDoctorInputSchema'

export const DiagnosisCreateManyDoctorInputEnvelopeSchema: z.ZodType<Prisma.DiagnosisCreateManyDoctorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => DiagnosisCreateManyDoctorInputSchema),
				z.lazy(() => DiagnosisCreateManyDoctorInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default DiagnosisCreateManyDoctorInputEnvelopeSchema
