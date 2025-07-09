import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateNestedOneWithoutBillsInputSchema } from './ServicesCreateNestedOneWithoutBillsInputSchema'

export const PatientBillsCreateWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsCreateWithoutPaymentInput> =
	z
		.object({
			serviceDate: z.coerce.date(),
			quantity: z.number().int(),
			unitCost: z.number(),
			totalCost: z.number(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			service: z.lazy(() => ServicesCreateNestedOneWithoutBillsInputSchema),
		})
		.strict()

export default PatientBillsCreateWithoutPaymentInputSchema
