import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffWhereInputSchema } from './StaffWhereInputSchema'

export const StaffNullableScalarRelationFilterSchema: z.ZodType<Prisma.StaffNullableScalarRelationFilter> =
	z
		.object({
			is: z
				.lazy(() => StaffWhereInputSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => StaffWhereInputSchema)
				.optional()
				.nullable(),
		})
		.strict()

export default StaffNullableScalarRelationFilterSchema
