import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'

export const RatingSelectSchema: z.ZodType<Prisma.RatingSelect> = z
	.object({
		id: z.boolean().optional(),
		staffId: z.boolean().optional(),
		patientId: z.boolean().optional(),
		rating: z.boolean().optional(),
		comment: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
	})
	.strict()

export default RatingSelectSchema
