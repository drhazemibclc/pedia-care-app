import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorOrderByWithRelationInputSchema } from './DoctorOrderByWithRelationInputSchema'
import { MedicalRecordsOrderByWithRelationInputSchema } from './MedicalRecordsOrderByWithRelationInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const DiagnosisOrderByWithRelationInputSchema: z.ZodType<Prisma.DiagnosisOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicalId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			symptoms: z.lazy(() => SortOrderSchema).optional(),
			diagnosis: z.lazy(() => SortOrderSchema).optional(),
			notes: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			prescribedMedications: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			followUpPlan: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			doctor: z.lazy(() => DoctorOrderByWithRelationInputSchema).optional(),
			medical: z.lazy(() => MedicalRecordsOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default DiagnosisOrderByWithRelationInputSchema
