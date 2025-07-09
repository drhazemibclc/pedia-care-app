import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionWhereInputSchema } from './PrescriptionWhereInputSchema'

export const PrescriptionListRelationFilterSchema: z.ZodType<Prisma.PrescriptionListRelationFilter> =
	z
		.object({
			every: z.lazy(() => PrescriptionWhereInputSchema).optional(),
			some: z.lazy(() => PrescriptionWhereInputSchema).optional(),
			none: z.lazy(() => PrescriptionWhereInputSchema).optional(),
		})
		.strict()

export default PrescriptionListRelationFilterSchema
