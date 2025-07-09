import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateNestedOneWithoutVaccinationInputSchema } from './StaffCreateNestedOneWithoutVaccinationInputSchema'

export const VaccinationCreateWithoutPatientInputSchema: z.ZodType<Prisma.VaccinationCreateWithoutPatientInput> =
	z
		.object({
			vaccineName: z.string(),
			vaccineBatchNo: z.string().optional().nullable(),
			administrationRoute: z.string().optional().nullable(),
			siteOfInjection: z.string().optional().nullable(),
			administeredDate: z.coerce.date(),
			nextDueDate: z.coerce.date().optional().nullable(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			administeredByStaff: z
				.lazy(() => StaffCreateNestedOneWithoutVaccinationInputSchema)
				.optional(),
		})
		.strict()

export default VaccinationCreateWithoutPatientInputSchema
