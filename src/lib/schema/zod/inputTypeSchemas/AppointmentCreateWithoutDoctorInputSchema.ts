import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema } from './MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema'
import { PatientCreateNestedOneWithoutAppointmentsInputSchema } from './PatientCreateNestedOneWithoutAppointmentsInputSchema'
import { PaymentCreateNestedManyWithoutAppointmentInputSchema } from './PaymentCreateNestedManyWithoutAppointmentInputSchema'
import { ServicesCreateNestedOneWithoutAppointmentsInputSchema } from './ServicesCreateNestedOneWithoutAppointmentsInputSchema'

export const AppointmentCreateWithoutDoctorInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutDoctorInput> =
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
			patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputSchema),
			service: z.lazy(() => ServicesCreateNestedOneWithoutAppointmentsInputSchema).optional(),
			bills: z.lazy(() => PaymentCreateNestedManyWithoutAppointmentInputSchema).optional(),
			medical: z.lazy(() => MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema).optional(),
		})
		.strict()

export default AppointmentCreateWithoutDoctorInputSchema
