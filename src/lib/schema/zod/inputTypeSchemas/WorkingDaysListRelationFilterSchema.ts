import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysWhereInputSchema } from './WorkingDaysWhereInputSchema'

export const WorkingDaysListRelationFilterSchema: z.ZodType<Prisma.WorkingDaysListRelationFilter> =
	z
		.object({
			every: z.lazy(() => WorkingDaysWhereInputSchema).optional(),
			some: z.lazy(() => WorkingDaysWhereInputSchema).optional(),
			none: z.lazy(() => WorkingDaysWhereInputSchema).optional(),
		})
		.strict()

export default WorkingDaysListRelationFilterSchema
