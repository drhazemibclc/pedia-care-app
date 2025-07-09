import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateInputSchema } from '../inputTypeSchemas/RatingCreateInputSchema'
import { RatingUncheckedCreateInputSchema } from '../inputTypeSchemas/RatingUncheckedCreateInputSchema'
import { RatingUncheckedUpdateInputSchema } from '../inputTypeSchemas/RatingUncheckedUpdateInputSchema'
import { RatingUpdateInputSchema } from '../inputTypeSchemas/RatingUpdateInputSchema'
import { RatingWhereUniqueInputSchema } from '../inputTypeSchemas/RatingWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const RatingUpsertArgsSchema: z.ZodType<
	Omit<Prisma.RatingUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: RatingWhereUniqueInputSchema,
		create: z.union([RatingCreateInputSchema, RatingUncheckedCreateInputSchema]),
		update: z.union([RatingUpdateInputSchema, RatingUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default RatingUpsertArgsSchema
