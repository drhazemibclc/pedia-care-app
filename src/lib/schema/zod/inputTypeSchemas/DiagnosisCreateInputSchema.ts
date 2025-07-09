import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateNestedOneWithoutDiagnosisInputSchema } from './DoctorCreateNestedOneWithoutDiagnosisInputSchema'
import { MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema } from './MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema'

export const DiagnosisCreateInputSchema: z.ZodType<Prisma.DiagnosisCreateInput> = z
	.object({
		patientId: z.string(),
		symptoms: z.string(),
		diagnosis: z.string(),
		notes: z.string().optional().nullable(),
		prescribedMedications: z.string().optional().nullable(),
		followUpPlan: z.string().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		doctor: z.lazy(() => DoctorCreateNestedOneWithoutDiagnosisInputSchema),
		medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema),
	})
	.strict()

export default DiagnosisCreateInputSchema
