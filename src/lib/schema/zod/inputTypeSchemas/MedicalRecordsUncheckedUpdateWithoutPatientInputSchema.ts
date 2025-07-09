import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema } from './DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema } from './LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema } from './PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema } from './VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema'

export const MedicalRecordsUncheckedUpdateWithoutPatientInputSchema: z.ZodType<Prisma.MedicalRecordsUncheckedUpdateWithoutPatientInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			appointmentId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
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
			labTest: z
				.lazy(() => LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema)
				.optional(),
			vitalSigns: z
				.lazy(() => VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputSchema)
				.optional(),
			diagnosis: z
				.lazy(() => DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputSchema)
				.optional(),
			Prescription: z
				.lazy(() => PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputSchema)
				.optional(),
		})
		.strict()

export default MedicalRecordsUncheckedUpdateWithoutPatientInputSchema
