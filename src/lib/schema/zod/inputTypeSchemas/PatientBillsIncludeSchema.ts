import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentArgsSchema } from '../outputTypeSchemas/PaymentArgsSchema'
import { ServicesArgsSchema } from '../outputTypeSchemas/ServicesArgsSchema'

export const PatientBillsIncludeSchema: z.ZodType<Prisma.PatientBillsInclude> = z
	.object({
		service: z.union([z.boolean(), z.lazy(() => ServicesArgsSchema)]).optional(),
		payment: z.union([z.boolean(), z.lazy(() => PaymentArgsSchema)]).optional(),
	})
	.strict()

export default PatientBillsIncludeSchema
