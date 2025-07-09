import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RatingFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.RatingFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: RatingWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RatingFindUniqueArgsSchema
