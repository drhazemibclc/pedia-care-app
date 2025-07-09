import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateNestedOneWithoutPrescriptionInputSchema } from './DoctorCreateNestedOneWithoutPrescriptionInputSchema'
import { MedicalRecordsCreateNestedOneWithoutPrescriptionInputSchema } from './MedicalRecordsCreateNestedOneWithoutPrescriptionInputSchema'

export const PrescriptionCreateWithoutPatientInputSchema: z.ZodType<Prisma.PrescriptionCreateWithoutPatientInput> =
	z
		.object({
			medicationName: z.string(),
			dosage: z.string(),
			frequency: z.string(),
			duration: z.string(),
			instructions: z.string().optional().nullable(),
			issuedDate: z.coerce.date().optional(),
			endDate: z.coerce.date().optional().nullable(),
			status: z.string().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			medicalRecord: z.lazy(() => MedicalRecordsCreateNestedOneWithoutPrescriptionInputSchema),
			doctor: z.lazy(() => DoctorCreateNestedOneWithoutPrescriptionInputSchema).optional(),
		})
		.strict()

export default PrescriptionCreateWithoutPatientInputSchema
