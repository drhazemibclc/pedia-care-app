import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesWhereInputSchema } from '../inputTypeSchemas/ServicesWhereInputSchema'

export const ServicesDeleteManyArgsSchema: z.ZodType<Prisma.ServicesDeleteManyArgs> = z
	.object({
		where: ServicesWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default ServicesDeleteManyArgsSchema
