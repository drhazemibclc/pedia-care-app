import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'

export const PrescriptionIncludeSchema: z.ZodType<Prisma.PrescriptionInclude> = z
	.object({
		medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
	})
	.strict()

export default PrescriptionIncludeSchema
