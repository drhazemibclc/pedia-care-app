import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCountOutputTypeSelectSchema } from './DoctorCountOutputTypeSelectSchema'

export const DoctorCountOutputTypeArgsSchema: z.ZodType<Prisma.DoctorCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => DoctorCountOutputTypeSelectSchema).nullish(),
	})
	.strict()

export default DoctorCountOutputTypeSelectSchema
