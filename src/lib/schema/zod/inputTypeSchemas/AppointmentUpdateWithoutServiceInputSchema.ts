import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DoctorUpdateOneRequiredWithoutAppointmentsNestedInputSchema } from './DoctorUpdateOneRequiredWithoutAppointmentsNestedInputSchema'
import { EnumAppointmentStatusFieldUpdateOperationsInputSchema } from './EnumAppointmentStatusFieldUpdateOperationsInputSchema'
import { MedicalRecordsUpdateManyWithoutAppointmentNestedInputSchema } from './MedicalRecordsUpdateManyWithoutAppointmentNestedInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PatientUpdateOneRequiredWithoutAppointmentsNestedInputSchema } from './PatientUpdateOneRequiredWithoutAppointmentsNestedInputSchema'
import { PaymentUpdateManyWithoutAppointmentNestedInputSchema } from './PaymentUpdateManyWithoutAppointmentNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const AppointmentUpdateWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutServiceInput> =
	z
		.object({
			appointmentDate: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			time: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			status: z
				.union([
					z.lazy(() => AppointmentStatusSchema),
					z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema),
				])
				.optional(),
			type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			note: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			reason: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			patient: z
				.lazy(() => PatientUpdateOneRequiredWithoutAppointmentsNestedInputSchema)
				.optional(),
			doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
			bills: z.lazy(() => PaymentUpdateManyWithoutAppointmentNestedInputSchema).optional(),
			medical: z.lazy(() => MedicalRecordsUpdateManyWithoutAppointmentNestedInputSchema).optional(),
		})
		.strict()

export default AppointmentUpdateWithoutServiceInputSchema
