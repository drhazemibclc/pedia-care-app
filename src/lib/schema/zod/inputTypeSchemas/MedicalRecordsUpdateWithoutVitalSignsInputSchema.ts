import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema } from './AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DiagnosisUpdateManyWithoutMedicalNestedInputSchema } from './DiagnosisUpdateManyWithoutMedicalNestedInputSchema'
import { LabTestUpdateManyWithoutMedicalRecordNestedInputSchema } from './LabTestUpdateManyWithoutMedicalRecordNestedInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PatientUpdateOneRequiredWithoutMedicalNestedInputSchema } from './PatientUpdateOneRequiredWithoutMedicalNestedInputSchema'
import { PrescriptionUpdateManyWithoutMedicalRecordNestedInputSchema } from './PrescriptionUpdateManyWithoutMedicalRecordNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const MedicalRecordsUpdateWithoutVitalSignsInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithoutVitalSignsInput> =
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
			appointment: z
				.lazy(() => AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema)
				.optional(),
			patient: z.lazy(() => PatientUpdateOneRequiredWithoutMedicalNestedInputSchema).optional(),
			labTest: z.lazy(() => LabTestUpdateManyWithoutMedicalRecordNestedInputSchema).optional(),
			diagnosis: z.lazy(() => DiagnosisUpdateManyWithoutMedicalNestedInputSchema).optional(),
			Prescription: z
				.lazy(() => PrescriptionUpdateManyWithoutMedicalRecordNestedInputSchema)
				.optional(),
		})
		.strict()

export default MedicalRecordsUpdateWithoutVitalSignsInputSchema
