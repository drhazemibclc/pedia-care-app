import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionWhereInputSchema } from '../inputTypeSchemas/PrescriptionWhereInputSchema'

export const PrescriptionDeleteManyArgsSchema: z.ZodType<Prisma.PrescriptionDeleteManyArgs> = z
	.object({
		where: PrescriptionWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default PrescriptionDeleteManyArgsSchema
