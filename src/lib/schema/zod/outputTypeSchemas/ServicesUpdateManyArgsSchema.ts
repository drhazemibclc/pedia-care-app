import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServicesUncheckedUpdateManyInputSchema'
import { ServicesUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServicesUpdateManyMutationInputSchema'
import { ServicesWhereInputSchema } from '../inputTypeSchemas/ServicesWhereInputSchema'

export const ServicesUpdateManyArgsSchema: z.ZodType<Prisma.ServicesUpdateManyArgs> = z
	.object({
		data: z.union([ServicesUpdateManyMutationInputSchema, ServicesUncheckedUpdateManyInputSchema]),
		where: ServicesWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default ServicesUpdateManyArgsSchema
