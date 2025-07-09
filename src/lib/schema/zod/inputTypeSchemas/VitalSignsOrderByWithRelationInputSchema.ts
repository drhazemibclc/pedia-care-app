import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsOrderByWithRelationInputSchema } from './MedicalRecordsOrderByWithRelationInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const VitalSignsOrderByWithRelationInputSchema: z.ZodType<Prisma.VitalSignsOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicalId: z.lazy(() => SortOrderSchema).optional(),
			bodyTemperature: z.lazy(() => SortOrderSchema).optional(),
			systolic: z.lazy(() => SortOrderSchema).optional(),
			diastolic: z.lazy(() => SortOrderSchema).optional(),
			heartRate: z.lazy(() => SortOrderSchema).optional(),
			respiratoryRate: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			oxygenSaturation: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			weight: z.lazy(() => SortOrderSchema).optional(),
			height: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			medical: z.lazy(() => MedicalRecordsOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default VitalSignsOrderByWithRelationInputSchema
