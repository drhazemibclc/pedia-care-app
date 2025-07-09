import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputSchema'

export const AppointmentUncheckedCreateWithoutBillsInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutBillsInput> =
	z
		.object({
			id: z.number().int().optional(),
			patientId: z.string(),
			doctorId: z.string(),
			serviceId: z.number().int().optional().nullable(),
			appointmentDate: z.coerce.date(),
			time: z.string(),
			status: z.lazy(() => AppointmentStatusSchema).optional(),
			type: z.string(),
			note: z.string().optional().nullable(),
			reason: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			medical: z
				.lazy(() => MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputSchema)
				.optional(),
		})
		.strict()

export default AppointmentUncheckedCreateWithoutBillsInputSchema
