import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientListRelationFilterSchema: z.ZodType<Prisma.PatientListRelationFilter> = z
	.object({
		every: z.lazy(() => PatientWhereInputSchema).optional(),
		some: z.lazy(() => PatientWhereInputSchema).optional(),
		none: z.lazy(() => PatientWhereInputSchema).optional(),
	})
	.strict()

export default PatientListRelationFilterSchema
