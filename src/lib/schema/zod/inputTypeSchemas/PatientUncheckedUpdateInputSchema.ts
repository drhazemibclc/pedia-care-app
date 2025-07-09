import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateManyWithoutPatientNestedInputSchema } from './AppointmentUncheckedUpdateManyWithoutPatientNestedInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema'
import { GenderSchema } from './GenderSchema'
import { MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema } from './MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema } from './PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema'
import { PrescriptionUncheckedUpdateManyWithoutPatientNestedInputSchema } from './PrescriptionUncheckedUpdateManyWithoutPatientNestedInputSchema'
import { RatingUncheckedUpdateManyWithoutPatientNestedInputSchema } from './RatingUncheckedUpdateManyWithoutPatientNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { VaccinationUncheckedUpdateManyWithoutPatientNestedInputSchema } from './VaccinationUncheckedUpdateManyWithoutPatientNestedInputSchema'

export const PatientUncheckedUpdateInputSchema: z.ZodType<Prisma.PatientUncheckedUpdateInput> = z
	.object({
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		firstName: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		lastName: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		dateOfBirth: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		gender: z
			.union([z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema)])
			.optional(),
		phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		maritalStatus: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		nutritionalStatus: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		address: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		emergencyContactName: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		emergencyContactNumber: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		relation: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		bloodGroup: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		allergies: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		medicalConditions: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		medicalHistory: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		insuranceProvider: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		insuranceNumber: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		privacyConsent: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		serviceConsent: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		medicalConsent: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
			.optional(),
		img: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		colorCode: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		appointments: z
			.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientNestedInputSchema)
			.optional(),
		medical: z
			.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputSchema)
			.optional(),
		payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema).optional(),
		ratings: z.lazy(() => RatingUncheckedUpdateManyWithoutPatientNestedInputSchema).optional(),
		Prescription: z
			.lazy(() => PrescriptionUncheckedUpdateManyWithoutPatientNestedInputSchema)
			.optional(),
		Vaccination: z
			.lazy(() => VaccinationUncheckedUpdateManyWithoutPatientNestedInputSchema)
			.optional(),
	})
	.strict()

export default PatientUncheckedUpdateInputSchema
