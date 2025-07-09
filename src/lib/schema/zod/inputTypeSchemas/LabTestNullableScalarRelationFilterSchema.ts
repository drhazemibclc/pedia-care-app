import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestWhereInputSchema } from './LabTestWhereInputSchema'

export const LabTestNullableScalarRelationFilterSchema: z.ZodType<Prisma.LabTestNullableScalarRelationFilter> =
	z
		.object({
			is: z
				.lazy(() => LabTestWhereInputSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => LabTestWhereInputSchema)
				.optional()
				.nullable(),
		})
		.strict()

export default LabTestNullableScalarRelationFilterSchema
