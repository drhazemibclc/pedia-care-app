import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'

export const RatingIncludeSchema: z.ZodType<Prisma.RatingInclude> = z
	.object({
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
	})
	.strict()

export default RatingIncludeSchema
