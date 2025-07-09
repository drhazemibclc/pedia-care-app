import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientIncludeSchema } from '../inputTypeSchemas/PatientIncludeSchema'
import { PatientSelectSchema } from '../inputTypeSchemas/PatientSelectSchema'

export const PatientArgsSchema: z.ZodType<Prisma.PatientDefaultArgs> = z
	.object({
		select: z.lazy(() => PatientSelectSchema).optional(),
		include: z.lazy(() => PatientIncludeSchema).optional(),
	})
	.strict()

export default PatientArgsSchema
