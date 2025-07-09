import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentOrderByRelationAggregateInputSchema } from './AppointmentOrderByRelationAggregateInputSchema'
import { LabTestOrderByWithRelationInputSchema } from './LabTestOrderByWithRelationInputSchema'
import { PatientBillsOrderByRelationAggregateInputSchema } from './PatientBillsOrderByRelationAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ServicesOrderByWithRelationInputSchema: z.ZodType<Prisma.ServicesOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			serviceName: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			price: z.lazy(() => SortOrderSchema).optional(),
			category: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			duration: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			isAvailable: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			labtest: z.lazy(() => LabTestOrderByWithRelationInputSchema).optional(),
			bills: z.lazy(() => PatientBillsOrderByRelationAggregateInputSchema).optional(),
			appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
		})
		.strict()

export default ServicesOrderByWithRelationInputSchema
