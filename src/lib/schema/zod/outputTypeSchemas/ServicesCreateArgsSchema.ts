import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ServicesCreateInputSchema } from '../inputTypeSchemas/ServicesCreateInputSchema'
import { ServicesUncheckedCreateInputSchema } from '../inputTypeSchemas/ServicesUncheckedCreateInputSchema'

export const ServicesCreateArgsSchema: z.ZodType<
	Omit<Prisma.ServicesCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([ServicesCreateInputSchema, ServicesUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default ServicesCreateArgsSchema
