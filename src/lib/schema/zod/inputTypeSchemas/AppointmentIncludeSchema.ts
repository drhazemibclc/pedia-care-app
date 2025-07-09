import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCountOutputTypeArgsSchema } from '../outputTypeSchemas/AppointmentCountOutputTypeArgsSchema'
import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { MedicalRecordsFindManyArgsSchema } from '../outputTypeSchemas/MedicalRecordsFindManyArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'
import { PaymentFindManyArgsSchema } from '../outputTypeSchemas/PaymentFindManyArgsSchema'
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema'

export const AppointmentIncludeSchema: z.ZodType<Prisma.AppointmentInclude> = z
	.object({
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		service: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
		bills: z.union([z.boolean(), z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => AppointmentCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default AppointmentIncludeSchema
