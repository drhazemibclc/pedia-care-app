import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestIncludeSchema } from '../inputTypeSchemas/LabTestIncludeSchema'
import { LabTestSelectSchema } from '../inputTypeSchemas/LabTestSelectSchema'

export const LabTestArgsSchema: z.ZodType<Prisma.LabTestDefaultArgs> = z
	.object({
		select: z.lazy(() => LabTestSelectSchema).optional(),
		include: z.lazy(() => LabTestIncludeSchema).optional(),
	})
	.strict()

export default LabTestArgsSchema
