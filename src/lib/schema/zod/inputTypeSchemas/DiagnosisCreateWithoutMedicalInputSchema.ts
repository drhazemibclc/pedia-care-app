import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateNestedOneWithoutDiagnosisInputSchema } from './DoctorCreateNestedOneWithoutDiagnosisInputSchema'

export const DiagnosisCreateWithoutMedicalInputSchema: z.ZodType<Prisma.DiagnosisCreateWithoutMedicalInput> =
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
			doctor: z.lazy(() => DoctorCreateNestedOneWithoutDiagnosisInputSchema),
		})
		.strict()

export default DiagnosisCreateWithoutMedicalInputSchema
