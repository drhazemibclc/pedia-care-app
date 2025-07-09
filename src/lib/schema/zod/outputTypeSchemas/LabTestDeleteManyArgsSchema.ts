import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestWhereInputSchema } from '../inputTypeSchemas/LabTestWhereInputSchema'

export const LabTestDeleteManyArgsSchema: z.ZodType<Prisma.LabTestDeleteManyArgs> = z
	.object({
		where: LabTestWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default LabTestDeleteManyArgsSchema
