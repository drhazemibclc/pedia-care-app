import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateInputSchema } from '../inputTypeSchemas/RatingCreateInputSchema'
import { RatingUncheckedCreateInputSchema } from '../inputTypeSchemas/RatingUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RatingCreateArgsSchema: z.ZodType<
	Omit<Prisma.RatingCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([RatingCreateInputSchema, RatingUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RatingCreateArgsSchema
