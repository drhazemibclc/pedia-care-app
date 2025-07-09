import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingIncludeSchema } from '../inputTypeSchemas/RatingIncludeSchema'
import { RatingSelectSchema } from '../inputTypeSchemas/RatingSelectSchema'

export const RatingArgsSchema: z.ZodType<Prisma.RatingDefaultArgs> = z
	.object({
		select: z.lazy(() => RatingSelectSchema).optional(),
		include: z.lazy(() => RatingIncludeSchema).optional(),
	})
	.strict()

export default RatingArgsSchema
