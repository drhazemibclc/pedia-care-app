import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUpdateManyWithoutPatientNestedInputSchema } from './AppointmentUpdateManyWithoutPatientNestedInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema'
import { GenderSchema } from './GenderSchema'
import { MedicalRecordsUpdateManyWithoutPatientNestedInputSchema } from './MedicalRecordsUpdateManyWithoutPatientNestedInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PrescriptionUpdateManyWithoutPatientNestedInputSchema } from './PrescriptionUpdateManyWithoutPatientNestedInputSchema'
import { RatingUpdateManyWithoutPatientNestedInputSchema } from './RatingUpdateManyWithoutPatientNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutPatientNestedInputSchema } from './UserUpdateOneRequiredWithoutPatientNestedInputSchema'
import { VaccinationUpdateManyWithoutPatientNestedInputSchema } from './VaccinationUpdateManyWithoutPatientNestedInputSchema'

export const PatientUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.PatientUpdateWithoutPaymentsInput> =
	z
		.object({
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			firstName: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			lastName: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			dateOfBirth: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			gender: z
				.union([
					z.lazy(() => GenderSchema),
					z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema),
				])
				.optional(),
			phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			maritalStatus: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			nutritionalStatus: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			address: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
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
			user: z.lazy(() => UserUpdateOneRequiredWithoutPatientNestedInputSchema).optional(),
			appointments: z.lazy(() => AppointmentUpdateManyWithoutPatientNestedInputSchema).optional(),
			medical: z.lazy(() => MedicalRecordsUpdateManyWithoutPatientNestedInputSchema).optional(),
			ratings: z.lazy(() => RatingUpdateManyWithoutPatientNestedInputSchema).optional(),
			Prescription: z.lazy(() => PrescriptionUpdateManyWithoutPatientNestedInputSchema).optional(),
			Vaccination: z.lazy(() => VaccinationUpdateManyWithoutPatientNestedInputSchema).optional(),
		})
		.strict()

export default PatientUpdateWithoutPaymentsInputSchema
