import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestWhereInputSchema } from './LabTestWhereInputSchema'

export const LabTestListRelationFilterSchema: z.ZodType<Prisma.LabTestListRelationFilter> = z
	.object({
		every: z.lazy(() => LabTestWhereInputSchema).optional(),
		some: z.lazy(() => LabTestWhereInputSchema).optional(),
		none: z.lazy(() => LabTestWhereInputSchema).optional(),
	})
	.strict()

export default LabTestListRelationFilterSchema
