import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorOrderByWithRelationInputSchema } from './DoctorOrderByWithRelationInputSchema'
import { MedicalRecordsOrderByWithRelationInputSchema } from './MedicalRecordsOrderByWithRelationInputSchema'
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PrescriptionOrderByWithRelationInputSchema: z.ZodType<Prisma.PrescriptionOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			medicalRecordId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			medicationName: z.lazy(() => SortOrderSchema).optional(),
			dosage: z.lazy(() => SortOrderSchema).optional(),
			frequency: z.lazy(() => SortOrderSchema).optional(),
			duration: z.lazy(() => SortOrderSchema).optional(),
			instructions: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			issuedDate: z.lazy(() => SortOrderSchema).optional(),
			endDate: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			medicalRecord: z.lazy(() => MedicalRecordsOrderByWithRelationInputSchema).optional(),
			doctor: z.lazy(() => DoctorOrderByWithRelationInputSchema).optional(),
			patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default PrescriptionOrderByWithRelationInputSchema
