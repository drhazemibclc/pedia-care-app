import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesScalarRelationFilterSchema: z.ZodType<Prisma.ServicesScalarRelationFilter> = z
	.object({
		is: z.lazy(() => ServicesWhereInputSchema).optional(),
		isNot: z.lazy(() => ServicesWhereInputSchema).optional(),
	})
	.strict()

export default ServicesScalarRelationFilterSchema
