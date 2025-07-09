import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema'
import { DiagnosisFindManyArgsSchema } from '../outputTypeSchemas/DiagnosisFindManyArgsSchema'
import { DoctorCountOutputTypeArgsSchema } from '../outputTypeSchemas/DoctorCountOutputTypeArgsSchema'
import { PrescriptionFindManyArgsSchema } from '../outputTypeSchemas/PrescriptionFindManyArgsSchema'
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { WorkingDaysFindManyArgsSchema } from '../outputTypeSchemas/WorkingDaysFindManyArgsSchema'

export const DoctorSelectSchema: z.ZodType<Prisma.DoctorSelect> = z
	.object({
		id: z.boolean().optional(),
		email: z.boolean().optional(),
		name: z.boolean().optional(),
		userId: z.boolean().optional(),
		specialization: z.boolean().optional(),
		licenseNumber: z.boolean().optional(),
		phone: z.boolean().optional(),
		address: z.boolean().optional(),
		department: z.boolean().optional(),
		img: z.boolean().optional(),
		colorCode: z.boolean().optional(),
		availabilityStatus: z.boolean().optional(),
		type: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		workingDays: z.union([z.boolean(), z.lazy(() => WorkingDaysFindManyArgsSchema)]).optional(),
		appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
		ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
		diagnosis: z.union([z.boolean(), z.lazy(() => DiagnosisFindManyArgsSchema)]).optional(),
		Prescription: z.union([z.boolean(), z.lazy(() => PrescriptionFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => DoctorCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default DoctorSelectSchema
