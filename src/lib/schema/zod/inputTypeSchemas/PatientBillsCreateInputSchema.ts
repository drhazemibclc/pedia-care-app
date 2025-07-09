import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateNestedOneWithoutBillsInputSchema } from './PaymentCreateNestedOneWithoutBillsInputSchema'
import { ServicesCreateNestedOneWithoutBillsInputSchema } from './ServicesCreateNestedOneWithoutBillsInputSchema'

export const PatientBillsCreateInputSchema: z.ZodType<Prisma.PatientBillsCreateInput> = z
	.object({
		serviceDate: z.coerce.date(),
		quantity: z.number().int(),
		unitCost: z.number(),
		totalCost: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		service: z.lazy(() => ServicesCreateNestedOneWithoutBillsInputSchema),
		payment: z.lazy(() => PaymentCreateNestedOneWithoutBillsInputSchema),
	})
	.strict()

export default PatientBillsCreateInputSchema
