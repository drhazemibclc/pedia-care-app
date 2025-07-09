import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsWhereInputSchema } from './VitalSignsWhereInputSchema'

export const VitalSignsListRelationFilterSchema: z.ZodType<Prisma.VitalSignsListRelationFilter> = z
	.object({
		every: z.lazy(() => VitalSignsWhereInputSchema).optional(),
		some: z.lazy(() => VitalSignsWhereInputSchema).optional(),
		none: z.lazy(() => VitalSignsWhereInputSchema).optional(),
	})
	.strict()

export default VitalSignsListRelationFilterSchema
