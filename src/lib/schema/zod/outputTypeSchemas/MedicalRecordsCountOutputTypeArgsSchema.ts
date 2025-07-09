import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCountOutputTypeSelectSchema } from './MedicalRecordsCountOutputTypeSelectSchema'

export const MedicalRecordsCountOutputTypeArgsSchema: z.ZodType<Prisma.MedicalRecordsCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => MedicalRecordsCountOutputTypeSelectSchema).nullish(),
		})
		.strict()

export default MedicalRecordsCountOutputTypeSelectSchema
