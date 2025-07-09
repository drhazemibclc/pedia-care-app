import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const PatientBillsCreateManyPaymentInputSchema: z.ZodType<Prisma.PatientBillsCreateManyPaymentInput> =
	z
		.object({
			id: z.number().int().optional(),
			serviceId: z.number().int(),
			serviceDate: z.coerce.date(),
			quantity: z.number().int(),
			unitCost: z.number(),
			totalCost: z.number(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default PatientBillsCreateManyPaymentInputSchema
