import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCountOrderByAggregateInputSchema } from './PatientCountOrderByAggregateInputSchema'
import { PatientMaxOrderByAggregateInputSchema } from './PatientMaxOrderByAggregateInputSchema'
import { PatientMinOrderByAggregateInputSchema } from './PatientMinOrderByAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PatientOrderByWithAggregationInputSchema: z.ZodType<Prisma.PatientOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			firstName: z.lazy(() => SortOrderSchema).optional(),
			lastName: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
			gender: z.lazy(() => SortOrderSchema).optional(),
			phone: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			maritalStatus: z.lazy(() => SortOrderSchema).optional(),
			nutritionalStatus: z.lazy(() => SortOrderSchema).optional(),
			address: z.lazy(() => SortOrderSchema).optional(),
			emergencyContactName: z.lazy(() => SortOrderSchema).optional(),
			emergencyContactNumber: z.lazy(() => SortOrderSchema).optional(),
			relation: z.lazy(() => SortOrderSchema).optional(),
			bloodGroup: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			allergies: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			medicalConditions: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			medicalHistory: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			insuranceProvider: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			insuranceNumber: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			privacyConsent: z.lazy(() => SortOrderSchema).optional(),
			serviceConsent: z.lazy(() => SortOrderSchema).optional(),
			medicalConsent: z.lazy(() => SortOrderSchema).optional(),
			img: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			colorCode: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => PatientCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => PatientMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => PatientMinOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default PatientOrderByWithAggregationInputSchema
