import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RatingDeleteArgsSchema: z.ZodType<
	Omit<Prisma.RatingDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: RatingWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RatingDeleteArgsSchema
