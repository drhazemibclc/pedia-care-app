import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema } from './AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputSchema } from './DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputSchema'
import { EnumJOBTYPEFieldUpdateOperationsInputSchema } from './EnumJOBTYPEFieldUpdateOperationsInputSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PrescriptionUncheckedUpdateManyWithoutDoctorNestedInputSchema } from './PrescriptionUncheckedUpdateManyWithoutDoctorNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInputSchema } from './WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInputSchema'

export const DoctorUncheckedUpdateWithoutRatingsInputSchema: z.ZodType<Prisma.DoctorUncheckedUpdateWithoutRatingsInput> =
	z
		.object({
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			userId: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
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
			workingDays: z
				.lazy(() => WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInputSchema)
				.optional(),
			appointments: z
				.lazy(() => AppointmentUncheckedUpdateManyWithoutDoctorNestedInputSchema)
				.optional(),
			diagnosis: z
				.lazy(() => DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputSchema)
				.optional(),
			Prescription: z
				.lazy(() => PrescriptionUncheckedUpdateManyWithoutDoctorNestedInputSchema)
				.optional(),
		})
		.strict()

export default DoctorUncheckedUpdateWithoutRatingsInputSchema
