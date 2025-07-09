import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionIncludeSchema } from '../inputTypeSchemas/PrescriptionIncludeSchema'
import { PrescriptionSelectSchema } from '../inputTypeSchemas/PrescriptionSelectSchema'

export const PrescriptionArgsSchema: z.ZodType<Prisma.PrescriptionDefaultArgs> = z
	.object({
		select: z.lazy(() => PrescriptionSelectSchema).optional(),
		include: z.lazy(() => PrescriptionIncludeSchema).optional(),
	})
	.strict()

export default PrescriptionArgsSchema
