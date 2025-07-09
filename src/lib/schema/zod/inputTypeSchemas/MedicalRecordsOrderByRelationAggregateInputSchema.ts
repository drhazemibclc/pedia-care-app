import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const MedicalRecordsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MedicalRecordsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default MedicalRecordsOrderByRelationAggregateInputSchema
