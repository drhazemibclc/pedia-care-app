import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RoleSchema } from './RoleSchema'
import { StatusSchema } from './StatusSchema'

export const StaffCreateManyInputSchema: z.ZodType<Prisma.StaffCreateManyInput> = z
	.object({
		id: z.string(),
		email: z.string(),
		name: z.string(),
		phone: z.string(),
		userId: z.string(),
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
	})
	.strict()

export default StaffCreateManyInputSchema
