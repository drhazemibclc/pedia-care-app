import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByWithRelationInputSchema } from './AppointmentOrderByWithRelationInputSchema'
import { DiagnosisOrderByRelationAggregateInputSchema } from './DiagnosisOrderByRelationAggregateInputSchema'
import { LabTestOrderByRelationAggregateInputSchema } from './LabTestOrderByRelationAggregateInputSchema'
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema'
import { PrescriptionOrderByRelationAggregateInputSchema } from './PrescriptionOrderByRelationAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { VitalSignsOrderByRelationAggregateInputSchema } from './VitalSignsOrderByRelationAggregateInputSchema'

export const MedicalRecordsOrderByWithRelationInputSchema: z.ZodType<Prisma.MedicalRecordsOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			appointmentId: z.lazy(() => SortOrderSchema).optional(),
			doctorId: z.lazy(() => SortOrderSchema).optional(),
			treatmentPlan: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			prescriptions: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			labRequest: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			notes: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional(),
			patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
			labTest: z.lazy(() => LabTestOrderByRelationAggregateInputSchema).optional(),
			vitalSigns: z.lazy(() => VitalSignsOrderByRelationAggregateInputSchema).optional(),
			diagnosis: z.lazy(() => DiagnosisOrderByRelationAggregateInputSchema).optional(),
			Prescription: z.lazy(() => PrescriptionOrderByRelationAggregateInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsOrderByWithRelationInputSchema
