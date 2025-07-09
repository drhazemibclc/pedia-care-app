import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisIncludeSchema } from '../inputTypeSchemas/DiagnosisIncludeSchema'
import { DiagnosisSelectSchema } from '../inputTypeSchemas/DiagnosisSelectSchema'

export const DiagnosisArgsSchema: z.ZodType<Prisma.DiagnosisDefaultArgs> = z
	.object({
		select: z.lazy(() => DiagnosisSelectSchema).optional(),
		include: z.lazy(() => DiagnosisIncludeSchema).optional(),
	})
	.strict()

export default DiagnosisArgsSchema
