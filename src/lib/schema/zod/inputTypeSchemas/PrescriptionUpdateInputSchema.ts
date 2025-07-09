import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DoctorUpdateOneWithoutPrescriptionNestedInputSchema } from './DoctorUpdateOneWithoutPrescriptionNestedInputSchema'
import { MedicalRecordsUpdateOneRequiredWithoutPrescriptionNestedInputSchema } from './MedicalRecordsUpdateOneRequiredWithoutPrescriptionNestedInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PatientUpdateOneRequiredWithoutPrescriptionNestedInputSchema } from './PatientUpdateOneRequiredWithoutPrescriptionNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const PrescriptionUpdateInputSchema: z.ZodType<Prisma.PrescriptionUpdateInput> = z
	.object({
		medicationName: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		dosage: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		frequency: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		duration: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		instructions: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		issuedDate: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		endDate: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		medicalRecord: z
			.lazy(() => MedicalRecordsUpdateOneRequiredWithoutPrescriptionNestedInputSchema)
			.optional(),
		doctor: z.lazy(() => DoctorUpdateOneWithoutPrescriptionNestedInputSchema).optional(),
		patient: z.lazy(() => PatientUpdateOneRequiredWithoutPrescriptionNestedInputSchema).optional(),
	})
	.strict()

export default PrescriptionUpdateInputSchema
