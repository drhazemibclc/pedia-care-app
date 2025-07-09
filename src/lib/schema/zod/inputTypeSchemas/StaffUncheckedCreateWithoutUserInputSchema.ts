import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RoleSchema } from './RoleSchema'
import { StatusSchema } from './StatusSchema'
import { VaccinationUncheckedCreateNestedManyWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedCreateNestedManyWithoutAdministeredByStaffInputSchema'

export const StaffUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.StaffUncheckedCreateWithoutUserInput> =
	z
		.object({
			id: z.string(),
			email: z.string(),
			name: z.string(),
			phone: z.string(),
			address: z.string(),
			department: z.string().optional().nullable(),
			img: z.string().optional().nullable(),
			licenseNumber: z.string().optional().nullable(),
			colorCode: z.string().optional().nullable(),
			hireDate: z.coerce.date().optional().nullable(),
			salary: z.number().optional().nullable(),
			role: z.lazy(() => RoleSchema),
			status: z.lazy(() => StatusSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			Vaccination: z
				.lazy(() => VaccinationUncheckedCreateNestedManyWithoutAdministeredByStaffInputSchema)
				.optional(),
		})
		.strict()

export default StaffUncheckedCreateWithoutUserInputSchema
