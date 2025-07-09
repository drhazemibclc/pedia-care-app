import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutMedicalInputSchema'
import { PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputSchema'
import { VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateNestedManyWithoutMedicalInputSchema'

export const MedicalRecordsUncheckedCreateWithoutLabTestInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutLabTestInput> =
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

export default MedicalRecordsUncheckedCreateWithoutLabTestInputSchema
