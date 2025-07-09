import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema'
import { LabTestUncheckedCreateNestedManyWithoutMedicalRecordInputSchema } from './LabTestUncheckedCreateNestedManyWithoutMedicalRecordInputSchema'
import { PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputSchema'
import { VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema'

export const MedicalRecordsUncheckedCreateInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateInput> =
	z
		.object({
			id: z.number().int().optional(),
			patientId: z.string(),
			appointmentId: z.number().int(),
			doctorId: z.string(),
			treatmentPlan: z.string().optional().nullable(),
			prescriptions: z.string().optional().nullable(),
			labRequest: z.string().optional().nullable(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			labTest: z
				.lazy(() => LabTestUncheckedCreateNestedManyWithoutMedicalRecordInputSchema)
				.optional(),
			vitalSigns: z
				.lazy(() => VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema)
				.optional(),
			diagnosis: z
				.lazy(() => DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema)
				.optional(),
			Prescription: z
				.lazy(() => PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputSchema)
				.optional(),
		})
		.strict()

export default MedicalRecordsUncheckedCreateInputSchema
