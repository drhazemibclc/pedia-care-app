import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorListRelationFilterSchema: z.ZodType<Prisma.DoctorListRelationFilter> = z
	.object({
		every: z.lazy(() => DoctorWhereInputSchema).optional(),
		some: z.lazy(() => DoctorWhereInputSchema).optional(),
		none: z.lazy(() => DoctorWhereInputSchema).optional(),
	})
	.strict()

export default DoctorListRelationFilterSchema
