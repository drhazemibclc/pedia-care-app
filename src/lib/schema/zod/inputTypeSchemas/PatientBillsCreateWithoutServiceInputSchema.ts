import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateNestedOneWithoutBillsInputSchema } from './PaymentCreateNestedOneWithoutBillsInputSchema'

export const PatientBillsCreateWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsCreateWithoutServiceInput> =
	z
		.object({
			serviceDate: z.coerce.date(),
			quantity: z.number().int(),
			unitCost: z.number(),
			totalCost: z.number(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			payment: z.lazy(() => PaymentCreateNestedOneWithoutBillsInputSchema),
		})
		.strict()

export default PatientBillsCreateWithoutServiceInputSchema
