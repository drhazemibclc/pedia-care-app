import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const PatientBillsCreateManyInputSchema: z.ZodType<Prisma.PatientBillsCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		billId: z.number().int(),
		serviceId: z.number().int(),
		serviceDate: z.coerce.date(),
		quantity: z.number().int(),
		unitCost: z.number(),
		totalCost: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.strict()

export default PatientBillsCreateManyInputSchema
