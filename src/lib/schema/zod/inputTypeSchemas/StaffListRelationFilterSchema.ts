import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffWhereInputSchema } from './StaffWhereInputSchema'

export const StaffListRelationFilterSchema: z.ZodType<Prisma.StaffListRelationFilter> = z
	.object({
		every: z.lazy(() => StaffWhereInputSchema).optional(),
		some: z.lazy(() => StaffWhereInputSchema).optional(),
		none: z.lazy(() => StaffWhereInputSchema).optional(),
	})
	.strict()

export default StaffListRelationFilterSchema
