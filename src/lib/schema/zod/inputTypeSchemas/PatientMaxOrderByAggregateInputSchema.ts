import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from './SortOrderSchema'

export const PatientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PatientMaxOrderByAggregateInput> =
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
			bloodGroup: z.lazy(() => SortOrderSchema).optional(),
			allergies: z.lazy(() => SortOrderSchema).optional(),
			medicalConditions: z.lazy(() => SortOrderSchema).optional(),
			medicalHistory: z.lazy(() => SortOrderSchema).optional(),
			insuranceProvider: z.lazy(() => SortOrderSchema).optional(),
			insuranceNumber: z.lazy(() => SortOrderSchema).optional(),
			privacyConsent: z.lazy(() => SortOrderSchema).optional(),
			serviceConsent: z.lazy(() => SortOrderSchema).optional(),
			medicalConsent: z.lazy(() => SortOrderSchema).optional(),
			img: z.lazy(() => SortOrderSchema).optional(),
			colorCode: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default PatientMaxOrderByAggregateInputSchema
