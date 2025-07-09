import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByRelationAggregateInputSchema } from './AppointmentOrderByRelationAggregateInputSchema'
import { DiagnosisOrderByRelationAggregateInputSchema } from './DiagnosisOrderByRelationAggregateInputSchema'
import { PrescriptionOrderByRelationAggregateInputSchema } from './PrescriptionOrderByRelationAggregateInputSchema'
import { RatingOrderByRelationAggregateInputSchema } from './RatingOrderByRelationAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { WorkingDaysOrderByRelationAggregateInputSchema } from './WorkingDaysOrderByRelationAggregateInputSchema'

export const DoctorOrderByWithRelationInputSchema: z.ZodType<Prisma.DoctorOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			specialization: z.lazy(() => SortOrderSchema).optional(),
			licenseNumber: z.lazy(() => SortOrderSchema).optional(),
			phone: z.lazy(() => SortOrderSchema).optional(),
			address: z.lazy(() => SortOrderSchema).optional(),
			department: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			img: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			colorCode: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			availabilityStatus: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			type: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
			workingDays: z.lazy(() => WorkingDaysOrderByRelationAggregateInputSchema).optional(),
			appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
			ratings: z.lazy(() => RatingOrderByRelationAggregateInputSchema).optional(),
			diagnosis: z.lazy(() => DiagnosisOrderByRelationAggregateInputSchema).optional(),
			Prescription: z.lazy(() => PrescriptionOrderByRelationAggregateInputSchema).optional(),
		})
		.strict()

export default DoctorOrderByWithRelationInputSchema
