import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { StaffOrderByWithRelationInputSchema } from './StaffOrderByWithRelationInputSchema'

export const VaccinationOrderByWithRelationInputSchema: z.ZodType<Prisma.VaccinationOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			patientId: z.lazy(() => SortOrderSchema).optional(),
			administeredBy: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			vaccineName: z.lazy(() => SortOrderSchema).optional(),
			vaccineBatchNo: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			administrationRoute: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			siteOfInjection: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			administeredDate: z.lazy(() => SortOrderSchema).optional(),
			nextDueDate: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			notes: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
			administeredByStaff: z.lazy(() => StaffOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default VaccinationOrderByWithRelationInputSchema
