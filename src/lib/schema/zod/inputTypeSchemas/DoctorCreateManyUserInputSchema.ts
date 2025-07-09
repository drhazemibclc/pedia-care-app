import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { JOBTYPESchema } from './JOBTYPESchema'

export const DoctorCreateManyUserInputSchema: z.ZodType<Prisma.DoctorCreateManyUserInput> = z
	.object({
		id: z.string(),
		email: z.string(),
		name: z.string(),
		specialization: z.string(),
		licenseNumber: z.string(),
		phone: z.string(),
		address: z.string(),
		department: z.string().optional().nullable(),
		img: z.string().optional().nullable(),
		colorCode: z.string().optional().nullable(),
		availabilityStatus: z.string().optional().nullable(),
		type: z.lazy(() => JOBTYPESchema).optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.strict()

export default DoctorCreateManyUserInputSchema
