import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCountOutputTypeSelectSchema } from './PatientCountOutputTypeSelectSchema'

export const PatientCountOutputTypeArgsSchema: z.ZodType<Prisma.PatientCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => PatientCountOutputTypeSelectSchema).nullish(),
		})
		.strict()

export default PatientCountOutputTypeSelectSchema
