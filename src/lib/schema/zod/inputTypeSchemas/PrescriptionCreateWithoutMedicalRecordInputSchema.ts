import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateNestedOneWithoutPrescriptionInputSchema } from './DoctorCreateNestedOneWithoutPrescriptionInputSchema'
import { PatientCreateNestedOneWithoutPrescriptionInputSchema } from './PatientCreateNestedOneWithoutPrescriptionInputSchema'

export const PrescriptionCreateWithoutMedicalRecordInputSchema: z.ZodType<Prisma.PrescriptionCreateWithoutMedicalRecordInput> =
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
			doctor: z.lazy(() => DoctorCreateNestedOneWithoutPrescriptionInputSchema).optional(),
			patient: z.lazy(() => PatientCreateNestedOneWithoutPrescriptionInputSchema),
		})
		.strict()

export default PrescriptionCreateWithoutMedicalRecordInputSchema
