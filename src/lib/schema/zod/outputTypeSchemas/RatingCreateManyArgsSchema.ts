import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateManyInputSchema } from '../inputTypeSchemas/RatingCreateManyInputSchema'

export const RatingCreateManyArgsSchema: z.ZodType<Prisma.RatingCreateManyArgs> = z
	.object({
		data: z.union([RatingCreateManyInputSchema, RatingCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default RatingCreateManyArgsSchema
