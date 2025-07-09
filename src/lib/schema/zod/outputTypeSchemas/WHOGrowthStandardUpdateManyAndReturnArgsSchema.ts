import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WHOGrowthStandardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUncheckedUpdateManyInputSchema'
import { WHOGrowthStandardUpdateManyMutationInputSchema } from '../inputTypeSchemas/WHOGrowthStandardUpdateManyMutationInputSchema'
import { WHOGrowthStandardWhereInputSchema } from '../inputTypeSchemas/WHOGrowthStandardWhereInputSchema'

export const WHOGrowthStandardUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.WHOGrowthStandardUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				WHOGrowthStandardUpdateManyMutationInputSchema,
				WHOGrowthStandardUncheckedUpdateManyInputSchema,
			]),
			where: WHOGrowthStandardWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default WHOGrowthStandardUpdateManyAndReturnArgsSchema
