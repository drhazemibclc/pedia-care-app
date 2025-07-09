import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsIncludeSchema } from '../inputTypeSchemas/VitalSignsIncludeSchema'
import { VitalSignsSelectSchema } from '../inputTypeSchemas/VitalSignsSelectSchema'

export const VitalSignsArgsSchema: z.ZodType<Prisma.VitalSignsDefaultArgs> = z
	.object({
		select: z.lazy(() => VitalSignsSelectSchema).optional(),
		include: z.lazy(() => VitalSignsIncludeSchema).optional(),
	})
	.strict()

export default VitalSignsArgsSchema
