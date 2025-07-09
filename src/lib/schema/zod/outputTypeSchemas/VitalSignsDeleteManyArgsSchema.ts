import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsWhereInputSchema } from '../inputTypeSchemas/VitalSignsWhereInputSchema'

export const VitalSignsDeleteManyArgsSchema: z.ZodType<Prisma.VitalSignsDeleteManyArgs> = z
	.object({
		where: VitalSignsWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default VitalSignsDeleteManyArgsSchema
