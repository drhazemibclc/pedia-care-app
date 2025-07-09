import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { DoctorCreateNestedOneWithoutAppointmentsInputSchema } from './DoctorCreateNestedOneWithoutAppointmentsInputSchema'
import { MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema } from './MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema'
import { PatientCreateNestedOneWithoutAppointmentsInputSchema } from './PatientCreateNestedOneWithoutAppointmentsInputSchema'
import { ServicesCreateNestedOneWithoutAppointmentsInputSchema } from './ServicesCreateNestedOneWithoutAppointmentsInputSchema'

export const AppointmentCreateWithoutBillsInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutBillsInput> =
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
			doctor: z.lazy(() => DoctorCreateNestedOneWithoutAppointmentsInputSchema),
			service: z.lazy(() => ServicesCreateNestedOneWithoutAppointmentsInputSchema).optional(),
			medical: z.lazy(() => MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema).optional(),
		})
		.strict()

export default AppointmentCreateWithoutBillsInputSchema
