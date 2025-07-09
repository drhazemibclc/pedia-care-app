import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsScalarRelationFilterSchema: z.ZodType<Prisma.MedicalRecordsScalarRelationFilter> =
	z
		.object({
			is: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
			isNot: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsScalarRelationFilterSchema
