import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingUncheckedUpdateInputSchema } from '../inputTypeSchemas/RatingUncheckedUpdateInputSchema'
import { RatingUpdateInputSchema } from '../inputTypeSchemas/RatingUpdateInputSchema'
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RatingUpdateArgsSchema: z.ZodType<
	Omit<Prisma.RatingUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([RatingUpdateInputSchema, RatingUncheckedUpdateInputSchema]),
		where: RatingWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RatingUpdateArgsSchema
