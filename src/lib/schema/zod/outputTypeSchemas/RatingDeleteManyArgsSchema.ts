import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema'

export const RatingDeleteManyArgsSchema: z.ZodType<Prisma.RatingDeleteManyArgs> = z
	.object({
		where: RatingWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default RatingDeleteManyArgsSchema
