import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsListRelationFilterSchema: z.ZodType<Prisma.MedicalRecordsListRelationFilter> =
	z
		.object({
			every: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
			some: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
			none: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsListRelationFilterSchema
