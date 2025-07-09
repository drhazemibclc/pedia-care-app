import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsIncludeSchema } from '../inputTypeSchemas/MedicalRecordsIncludeSchema'
import { MedicalRecordsSelectSchema } from '../inputTypeSchemas/MedicalRecordsSelectSchema'

export const MedicalRecordsArgsSchema: z.ZodType<Prisma.MedicalRecordsDefaultArgs> = z
	.object({
		select: z.lazy(() => MedicalRecordsSelectSchema).optional(),
		include: z.lazy(() => MedicalRecordsIncludeSchema).optional(),
	})
	.strict()

export default MedicalRecordsArgsSchema
