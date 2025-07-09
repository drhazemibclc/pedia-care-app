import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WHOGrowthStandardWhereInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereInputSchema'

export const WHOGrowthStandardDeleteManyArgsSchema: z.ZodType<Prisma.WHOGrowthStandardDeleteManyArgs> =
	z
		.object({
			where: WHOGrowthStandardWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default WHOGrowthStandardDeleteManyArgsSchema
