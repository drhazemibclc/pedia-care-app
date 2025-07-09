import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'

export const DiagnosisSelectSchema: z.ZodType<Prisma.DiagnosisSelect> = z
	.object({
		id: z.boolean().optional(),
		patientId: z.boolean().optional(),
		medicalId: z.boolean().optional(),
		doctorId: z.boolean().optional(),
		symptoms: z.boolean().optional(),
		diagnosis: z.boolean().optional(),
		notes: z.boolean().optional(),
		prescribedMedications: z.boolean().optional(),
		followUpPlan: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
	})
	.strict()

export default DiagnosisSelectSchema
