import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorNullableScalarRelationFilterSchema: z.ZodType<Prisma.DoctorNullableScalarRelationFilter> =
	z
		.object({
			is: z
				.lazy(() => DoctorWhereInputSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => DoctorWhereInputSchema)
				.optional()
				.nullable(),
		})
		.strict()

export default DoctorNullableScalarRelationFilterSchema
