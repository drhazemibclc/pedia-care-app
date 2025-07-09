import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WHOGrowthStandardCreateManyInputSchema } from '../inputTypeSchemas/WHOGrowthStandardCreateManyInputSchema'

export const WHOGrowthStandardCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WHOGrowthStandardCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				WHOGrowthStandardCreateManyInputSchema,
				WHOGrowthStandardCreateManyInputSchema.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default WHOGrowthStandardCreateManyAndReturnArgsSchema
