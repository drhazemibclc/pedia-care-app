import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCountOutputTypeArgsSchema } from '../outputTypeSchemas/StaffCountOutputTypeArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { VaccinationFindManyArgsSchema } from '../outputTypeSchemas/VaccinationFindManyArgsSchema'

export const StaffSelectSchema: z.ZodType<Prisma.StaffSelect> = z
	.object({
		id: z.boolean().optional(),
		email: z.boolean().optional(),
		name: z.boolean().optional(),
		phone: z.boolean().optional(),
		userId: z.boolean().optional(),
		address: z.boolean().optional(),
		department: z.boolean().optional(),
		img: z.boolean().optional(),
		licenseNumber: z.boolean().optional(),
		colorCode: z.boolean().optional(),
		hireDate: z.boolean().optional(),
		salary: z.boolean().optional(),
		role: z.boolean().optional(),
		status: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		Vaccination: z.union([z.boolean(), z.lazy(() => VaccinationFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => StaffCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default StaffSelectSchema
