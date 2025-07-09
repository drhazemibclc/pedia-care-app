import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUpdateManyWithoutDoctorNestedInputSchema } from './AppointmentUpdateManyWithoutDoctorNestedInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DiagnosisUpdateManyWithoutDoctorNestedInputSchema } from './DiagnosisUpdateManyWithoutDoctorNestedInputSchema'
import { EnumJOBTYPEFieldUpdateOperationsInputSchema } from './EnumJOBTYPEFieldUpdateOperationsInputSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PrescriptionUpdateManyWithoutDoctorNestedInputSchema } from './PrescriptionUpdateManyWithoutDoctorNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutDoctorNestedInputSchema } from './UserUpdateOneRequiredWithoutDoctorNestedInputSchema'
import { WorkingDaysUpdateManyWithoutDoctorNestedInputSchema } from './WorkingDaysUpdateManyWithoutDoctorNestedInputSchema'

export const DoctorUpdateWithoutRatingsInputSchema: z.ZodType<Prisma.DoctorUpdateWithoutRatingsInput> =
	z
		.object({
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			specialization: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			licenseNumber: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			address: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			department: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			img: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			colorCode: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			availabilityStatus: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			type: z
				.union([
					z.lazy(() => JOBTYPESchema),
					z.lazy(() => EnumJOBTYPEFieldUpdateOperationsInputSchema),
				])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			user: z.lazy(() => UserUpdateOneRequiredWithoutDoctorNestedInputSchema).optional(),
			workingDays: z.lazy(() => WorkingDaysUpdateManyWithoutDoctorNestedInputSchema).optional(),
			appointments: z.lazy(() => AppointmentUpdateManyWithoutDoctorNestedInputSchema).optional(),
			diagnosis: z.lazy(() => DiagnosisUpdateManyWithoutDoctorNestedInputSchema).optional(),
			Prescription: z.lazy(() => PrescriptionUpdateManyWithoutDoctorNestedInputSchema).optional(),
		})
		.strict()

export default DoctorUpdateWithoutRatingsInputSchema
