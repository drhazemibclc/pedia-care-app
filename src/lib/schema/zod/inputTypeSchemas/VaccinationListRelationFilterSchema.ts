import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationWhereInputSchema } from './VaccinationWhereInputSchema'

export const VaccinationListRelationFilterSchema: z.ZodType<Prisma.VaccinationListRelationFilter> =
	z
		.object({
			every: z.lazy(() => VaccinationWhereInputSchema).optional(),
			some: z.lazy(() => VaccinationWhereInputSchema).optional(),
			none: z.lazy(() => VaccinationWhereInputSchema).optional(),
		})
		.strict()

export default VaccinationListRelationFilterSchema
