import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsWhereInputSchema } from './PatientBillsWhereInputSchema'

export const PatientBillsListRelationFilterSchema: z.ZodType<Prisma.PatientBillsListRelationFilter> =
	z
		.object({
			every: z.lazy(() => PatientBillsWhereInputSchema).optional(),
			some: z.lazy(() => PatientBillsWhereInputSchema).optional(),
			none: z.lazy(() => PatientBillsWhereInputSchema).optional(),
		})
		.strict()

export default PatientBillsListRelationFilterSchema
