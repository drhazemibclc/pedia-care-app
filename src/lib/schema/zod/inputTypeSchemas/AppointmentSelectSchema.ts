import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCountOutputTypeArgsSchema } from '../outputTypeSchemas/AppointmentCountOutputTypeArgsSchema'
import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { MedicalRecordsFindManyArgsSchema } from '../outputTypeSchemas/MedicalRecordsFindManyArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'
import { PaymentFindManyArgsSchema } from '../outputTypeSchemas/PaymentFindManyArgsSchema'
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema'

export const AppointmentSelectSchema: z.ZodType<Prisma.AppointmentSelect> = z
	.object({
		id: z.boolean().optional(),
		patientId: z.boolean().optional(),
		doctorId: z.boolean().optional(),
		serviceId: z.boolean().optional(),
		appointmentDate: z.boolean().optional(),
		time: z.boolean().optional(),
		status: z.boolean().optional(),
		type: z.boolean().optional(),
		note: z.boolean().optional(),
		reason: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		service: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
		bills: z.union([z.boolean(), z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => AppointmentCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default AppointmentSelectSchema
