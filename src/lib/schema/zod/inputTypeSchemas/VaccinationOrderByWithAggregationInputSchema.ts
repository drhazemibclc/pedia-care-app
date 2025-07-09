import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { VaccinationAvgOrderByAggregateInputSchema } from './VaccinationAvgOrderByAggregateInputSchema'
import { VaccinationCountOrderByAggregateInputSchema } from './VaccinationCountOrderByAggregateInputSchema'
import { VaccinationMaxOrderByAggregateInputSchema } from './VaccinationMaxOrderByAggregateInputSchema'
import { VaccinationMinOrderByAggregateInputSchema } from './VaccinationMinOrderByAggregateInputSchema'
import { VaccinationSumOrderByAggregateInputSchema } from './VaccinationSumOrderByAggregateInputSchema'

export const VaccinationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VaccinationOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			administeredBy: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			vaccineName: z.lazy(() => SortOrderSchema).optional(),
			vaccineBatchNo: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			administrationRoute: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			siteOfInjection: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			administeredDate: z.lazy(() => SortOrderSchema).optional(),
			nextDueDate: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			notes: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => VaccinationCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => VaccinationAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => VaccinationMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => VaccinationMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => VaccinationSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default VaccinationOrderByWithAggregationInputSchema
