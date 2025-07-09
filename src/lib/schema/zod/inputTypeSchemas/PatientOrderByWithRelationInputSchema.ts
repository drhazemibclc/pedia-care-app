import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByRelationAggregateInputSchema } from './AppointmentOrderByRelationAggregateInputSchema'
import { MedicalRecordsOrderByRelationAggregateInputSchema } from './MedicalRecordsOrderByRelationAggregateInputSchema'
import { PaymentOrderByRelationAggregateInputSchema } from './PaymentOrderByRelationAggregateInputSchema'
import { PrescriptionOrderByRelationAggregateInputSchema } from './PrescriptionOrderByRelationAggregateInputSchema'
import { RatingOrderByRelationAggregateInputSchema } from './RatingOrderByRelationAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { VaccinationOrderByRelationAggregateInputSchema } from './VaccinationOrderByRelationAggregateInputSchema'

export const PatientOrderByWithRelationInputSchema: z.ZodType<Prisma.PatientOrderByWithRelationInput> =
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
			user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
			appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
			medical: z.lazy(() => MedicalRecordsOrderByRelationAggregateInputSchema).optional(),
			payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional(),
			ratings: z.lazy(() => RatingOrderByRelationAggregateInputSchema).optional(),
			Prescription: z.lazy(() => PrescriptionOrderByRelationAggregateInputSchema).optional(),
			Vaccination: z.lazy(() => VaccinationOrderByRelationAggregateInputSchema).optional(),
		})
		.strict()

export default PatientOrderByWithRelationInputSchema
