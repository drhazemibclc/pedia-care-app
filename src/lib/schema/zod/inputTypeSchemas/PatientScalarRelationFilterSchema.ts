import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientScalarRelationFilterSchema: z.ZodType<Prisma.PatientScalarRelationFilter> = z
	.object({
		is: z.lazy(() => PatientWhereInputSchema).optional(),
		isNot: z.lazy(() => PatientWhereInputSchema).optional(),
	})
	.strict()

export default PatientScalarRelationFilterSchema
