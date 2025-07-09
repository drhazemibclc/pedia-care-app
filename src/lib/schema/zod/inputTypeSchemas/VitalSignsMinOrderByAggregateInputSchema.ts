import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const VitalSignsMinOrderByAggregateInputSchema: z.ZodType<Prisma.VitalSignsMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicalId: z.lazy(() => SortOrderSchema).optional(),
			bodyTemperature: z.lazy(() => SortOrderSchema).optional(),
			systolic: z.lazy(() => SortOrderSchema).optional(),
			diastolic: z.lazy(() => SortOrderSchema).optional(),
			heartRate: z.lazy(() => SortOrderSchema).optional(),
			respiratoryRate: z.lazy(() => SortOrderSchema).optional(),
			oxygenSaturation: z.lazy(() => SortOrderSchema).optional(),
			weight: z.lazy(() => SortOrderSchema).optional(),
			height: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default VitalSignsMinOrderByAggregateInputSchema
