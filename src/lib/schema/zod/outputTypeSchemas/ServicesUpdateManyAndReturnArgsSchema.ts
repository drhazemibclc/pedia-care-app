import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServicesUncheckedUpdateManyInputSchema'
import { ServicesUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServicesUpdateManyMutationInputSchema'
import { ServicesWhereInputSchema } from '../inputTypeSchemas/ServicesWhereInputSchema'

export const ServicesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ServicesUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				ServicesUpdateManyMutationInputSchema,
				ServicesUncheckedUpdateManyInputSchema,
			]),
			where: ServicesWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default ServicesUpdateManyAndReturnArgsSchema
