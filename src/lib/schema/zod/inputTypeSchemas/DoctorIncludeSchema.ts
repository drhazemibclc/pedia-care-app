import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema'
import { DiagnosisFindManyArgsSchema } from '../outputTypeSchemas/DiagnosisFindManyArgsSchema'
import { DoctorCountOutputTypeArgsSchema } from '../outputTypeSchemas/DoctorCountOutputTypeArgsSchema'
import { PrescriptionFindManyArgsSchema } from '../outputTypeSchemas/PrescriptionFindManyArgsSchema'
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { WorkingDaysFindManyArgsSchema } from '../outputTypeSchemas/WorkingDaysFindManyArgsSchema'

export const DoctorIncludeSchema: z.ZodType<Prisma.DoctorInclude> = z
	.object({
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		workingDays: z.union([z.boolean(), z.lazy(() => WorkingDaysFindManyArgsSchema)]).optional(),
		appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
		ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
		diagnosis: z.union([z.boolean(), z.lazy(() => DiagnosisFindManyArgsSchema)]).optional(),
		Prescription: z.union([z.boolean(), z.lazy(() => PrescriptionFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => DoctorCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default DoctorIncludeSchema
