import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RatingUncheckedUpdateManyInputSchema'
import { RatingUpdateManyMutationInputSchema } from '../inputTypeSchemas/RatingUpdateManyMutationInputSchema'
import { RatingWhereInputSchema } from '../inputTypeSchemas/RatingWhereInputSchema'

export const RatingUpdateManyArgsSchema: z.ZodType<Prisma.RatingUpdateManyArgs> = z
	.object({
		data: z.union([RatingUpdateManyMutationInputSchema, RatingUncheckedUpdateManyInputSchema]),
		where: RatingWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default RatingUpdateManyArgsSchema
