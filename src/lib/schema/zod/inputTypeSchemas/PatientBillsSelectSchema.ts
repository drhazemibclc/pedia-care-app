import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentArgsSchema } from '../outputTypeSchemas/PaymentArgsSchema'
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema'

export const PatientBillsSelectSchema: z.ZodType<Prisma.PatientBillsSelect> = z
	.object({
		id: z.boolean().optional(),
		billId: z.boolean().optional(),
		serviceId: z.boolean().optional(),
		serviceDate: z.boolean().optional(),
		quantity: z.boolean().optional(),
		unitCost: z.boolean().optional(),
		totalCost: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		service: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
		payment: z.union([z.boolean(), z.lazy(() => PaymentArgsSchema)]).optional(),
	})
	.strict()

export default PatientBillsSelectSchema
