import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ServicesCreateInputSchema } from '../inputTypeSchemas/ServicesCreateInputSchema'
import { ServicesUncheckedCreateInputSchema } from '../inputTypeSchemas/ServicesUncheckedCreateInputSchema'
import { ServicesUncheckedUpdateInputSchema } from '../inputTypeSchemas/ServicesUncheckedUpdateInputSchema'
import { ServicesUpdateInputSchema } from '../inputTypeSchemas/ServicesUpdateInputSchema'
import { ServicesWhereUniqueInputSchema } from '../inputTypeSchemas/ServicesWhereUniqueInputSchema'

export const ServicesUpsertArgsSchema: z.ZodType<
	Omit<Prisma.ServicesUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: ServicesWhereUniqueInputSchema,
		create: z.union([ServicesCreateInputSchema, ServicesUncheckedCreateInputSchema]),
		update: z.union([ServicesUpdateInputSchema, ServicesUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default ServicesUpsertArgsSchema
