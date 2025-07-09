import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateNestedOneWithoutMedicalInputSchema } from './AppointmentCreateNestedOneWithoutMedicalInputSchema'
import { DiagnosisCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisCreateNestedManyWithoutMedicalInputSchema'
import { PatientCreateNestedOneWithoutMedicalInputSchema } from './PatientCreateNestedOneWithoutMedicalInputSchema'
import { PrescriptionCreateNestedManyWithoutMedicalRecordInputSchema } from './PrescriptionCreateNestedManyWithoutMedicalRecordInputSchema'
import { VitalSignsCreateNestedManyWithoutMedicalInputSchema } from './VitalSignsCreateNestedManyWithoutMedicalInputSchema'

export const MedicalRecordsCreateWithoutLabTestInputSchema: z.ZodType<Prisma.MedicalRecordsCreateWithoutLabTestInput> =
	z
		.object({
			doctorId: z.string(),
			treatmentPlan: z.string().optional().nullable(),
			prescriptions: z.string().optional().nullable(),
			labRequest: z.string().optional().nullable(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			appointment: z.lazy(() => AppointmentCreateNestedOneWithoutMedicalInputSchema),
			patient: z.lazy(() => PatientCreateNestedOneWithoutMedicalInputSchema),
			vitalSigns: z.lazy(() => VitalSignsCreateNestedManyWithoutMedicalInputSchema).optional(),
			diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutMedicalInputSchema).optional(),
			Prescription: z
				.lazy(() => PrescriptionCreateNestedManyWithoutMedicalRecordInputSchema)
				.optional(),
		})
		.strict()

export default MedicalRecordsCreateWithoutLabTestInputSchema
