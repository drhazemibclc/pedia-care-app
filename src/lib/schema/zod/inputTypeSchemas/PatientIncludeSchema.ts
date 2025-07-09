import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema'
import { MedicalRecordsFindManyArgsSchema } from '../outputTypeSchemas/MedicalRecordsFindManyArgsSchema'
import { PatientCountOutputTypeArgsSchema } from '../outputTypeSchemas/PatientCountOutputTypeArgsSchema'
import { PaymentFindManyArgsSchema } from '../outputTypeSchemas/PaymentFindManyArgsSchema'
import { PrescriptionFindManyArgsSchema } from '../outputTypeSchemas/PrescriptionFindManyArgsSchema'
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { VaccinationFindManyArgsSchema } from '../outputTypeSchemas/VaccinationFindManyArgsSchema'

export const PatientIncludeSchema: z.ZodType<Prisma.PatientInclude> = z
	.object({
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManyArgsSchema)]).optional(),
		payments: z.union([z.boolean(), z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
		ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
		Prescription: z.union([z.boolean(), z.lazy(() => PrescriptionFindManyArgsSchema)]).optional(),
		Vaccination: z.union([z.boolean(), z.lazy(() => VaccinationFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default PatientIncludeSchema
