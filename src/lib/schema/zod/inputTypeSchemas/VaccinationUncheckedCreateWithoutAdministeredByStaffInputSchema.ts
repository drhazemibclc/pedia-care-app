import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema: z.ZodType<Prisma.VaccinationUncheckedCreateWithoutAdministeredByStaffInput> =
	z
		.object({
			id: z.number().int().optional(),
			patientId: z.string(),
			vaccineName: z.string(),
			vaccineBatchNo: z.string().optional().nullable(),
			administrationRoute: z.string().optional().nullable(),
			siteOfInjection: z.string().optional().nullable(),
			administeredDate: z.coerce.date(),
			nextDueDate: z.coerce.date().optional().nullable(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema
