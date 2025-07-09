import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsOrderByWithRelationInputSchema } from './MedicalRecordsOrderByWithRelationInputSchema'
import { ServicesOrderByWithRelationInputSchema } from './ServicesOrderByWithRelationInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LabTestOrderByWithRelationInputSchema: z.ZodType<Prisma.LabTestOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			recordId: z.lazy(() => SortOrderSchema).optional(),
			testDate: z.lazy(() => SortOrderSchema).optional(),
			result: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			notes: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			serviceId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			services: z.lazy(() => ServicesOrderByWithRelationInputSchema).optional(),
			medicalRecord: z.lazy(() => MedicalRecordsOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default LabTestOrderByWithRelationInputSchema
