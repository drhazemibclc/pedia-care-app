import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DiagnosisUpdateManyWithoutMedicalNestedInputSchema } from './DiagnosisUpdateManyWithoutMedicalNestedInputSchema'
import { LabTestUpdateManyWithoutMedicalRecordNestedInputSchema } from './LabTestUpdateManyWithoutMedicalRecordNestedInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PatientUpdateOneRequiredWithoutMedicalNestedInputSchema } from './PatientUpdateOneRequiredWithoutMedicalNestedInputSchema'
import { PrescriptionUpdateManyWithoutMedicalRecordNestedInputSchema } from './PrescriptionUpdateManyWithoutMedicalRecordNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { VitalSignsUpdateManyWithoutMedicalNestedInputSchema } from './VitalSignsUpdateManyWithoutMedicalNestedInputSchema'

export const MedicalRecordsUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithoutAppointmentInput> =
	z
		.object({
			doctorId: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			treatmentPlan: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			prescriptions: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			labRequest: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			notes: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			patient: z.lazy(() => PatientUpdateOneRequiredWithoutMedicalNestedInputSchema).optional(),
			labTest: z.lazy(() => LabTestUpdateManyWithoutMedicalRecordNestedInputSchema).optional(),
			vitalSigns: z.lazy(() => VitalSignsUpdateManyWithoutMedicalNestedInputSchema).optional(),
			diagnosis: z.lazy(() => DiagnosisUpdateManyWithoutMedicalNestedInputSchema).optional(),
			Prescription: z
				.lazy(() => PrescriptionUpdateManyWithoutMedicalRecordNestedInputSchema)
				.optional(),
		})
		.strict()

export default MedicalRecordsUpdateWithoutAppointmentInputSchema
