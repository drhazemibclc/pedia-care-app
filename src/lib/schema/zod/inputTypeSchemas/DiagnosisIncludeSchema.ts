import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'

export const DiagnosisIncludeSchema: z.ZodType<Prisma.DiagnosisInclude> = z
	.object({
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
	})
	.strict()

export default DiagnosisIncludeSchema
