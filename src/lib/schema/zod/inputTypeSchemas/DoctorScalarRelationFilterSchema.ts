import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorScalarRelationFilterSchema: z.ZodType<Prisma.DoctorScalarRelationFilter> = z
	.object({
		is: z.lazy(() => DoctorWhereInputSchema).optional(),
		isNot: z.lazy(() => DoctorWhereInputSchema).optional(),
	})
	.strict()

export default DoctorScalarRelationFilterSchema
