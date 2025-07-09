import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesNullableScalarRelationFilterSchema: z.ZodType<Prisma.ServicesNullableScalarRelationFilter> =
	z
		.object({
			is: z
				.lazy(() => ServicesWhereInputSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => ServicesWhereInputSchema)
				.optional()
				.nullable(),
		})
		.strict()

export default ServicesNullableScalarRelationFilterSchema
