import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema } from './MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema'

export const DiagnosisCreateWithoutDoctorInputSchema: z.ZodType<Prisma.DiagnosisCreateWithoutDoctorInput> =
	z
		.object({
			patientId: z.string(),
			symptoms: z.string(),
			diagnosis: z.string(),
			notes: z.string().optional().nullable(),
			prescribedMedications: z.string().optional().nullable(),
			followUpPlan: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema),
		})
		.strict()

export default DiagnosisCreateWithoutDoctorInputSchema
