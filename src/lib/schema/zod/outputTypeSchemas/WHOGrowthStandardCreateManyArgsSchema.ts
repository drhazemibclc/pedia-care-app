import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WHOGrowthStandardCreateManyInputSchema } from '../inputTypeSchemas/WHOGrowthStandardCreateManyInputSchema'

export const WHOGrowthStandardCreateManyArgsSchema: z.ZodType<Prisma.WHOGrowthStandardCreateManyArgs> =
	z
		.object({
			data: z.union([
				WHOGrowthStandardCreateManyInputSchema,
				WHOGrowthStandardCreateManyInputSchema.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default WHOGrowthStandardCreateManyArgsSchema
