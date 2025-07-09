import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingWhereInputSchema } from './RatingWhereInputSchema'

export const RatingListRelationFilterSchema: z.ZodType<Prisma.RatingListRelationFilter> = z
	.object({
		every: z.lazy(() => RatingWhereInputSchema).optional(),
		some: z.lazy(() => RatingWhereInputSchema).optional(),
		none: z.lazy(() => RatingWhereInputSchema).optional(),
	})
	.strict()

export default RatingListRelationFilterSchema
