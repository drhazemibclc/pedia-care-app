import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { DoctorCreateNestedOneWithoutAppointmentsInputSchema } from './DoctorCreateNestedOneWithoutAppointmentsInputSchema'
import { MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema } from './MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema'
import { PaymentCreateNestedManyWithoutAppointmentInputSchema } from './PaymentCreateNestedManyWithoutAppointmentInputSchema'
import { ServicesCreateNestedOneWithoutAppointmentsInputSchema } from './ServicesCreateNestedOneWithoutAppointmentsInputSchema'

export const AppointmentCreateWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutPatientInput> =
	z
		.object({
			appointmentDate: z.coerce.date(),
			time: z.string(),
			status: z.lazy(() => AppointmentStatusSchema).optional(),
			type: z.string(),
			note: z.string().optional().nullable(),
			reason: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			doctor: z.lazy(() => DoctorCreateNestedOneWithoutAppointmentsInputSchema),
			service: z.lazy(() => ServicesCreateNestedOneWithoutAppointmentsInputSchema).optional(),
			bills: z.lazy(() => PaymentCreateNestedManyWithoutAppointmentInputSchema).optional(),
			medical: z.lazy(() => MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema).optional(),
		})
		.strict()

export default AppointmentCreateWithoutPatientInputSchema
