import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const VaccinationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VaccinationMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			administeredBy: z.lazy(() => SortOrderSchema).optional(),
			vaccineName: z.lazy(() => SortOrderSchema).optional(),
			vaccineBatchNo: z.lazy(() => SortOrderSchema).optional(),
			administrationRoute: z.lazy(() => SortOrderSchema).optional(),
			siteOfInjection: z.lazy(() => SortOrderSchema).optional(),
			administeredDate: z.lazy(() => SortOrderSchema).optional(),
			nextDueDate: z.lazy(() => SortOrderSchema).optional(),
			notes: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default VaccinationMaxOrderByAggregateInputSchema
