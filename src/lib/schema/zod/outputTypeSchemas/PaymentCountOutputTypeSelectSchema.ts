import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const PaymentCountOutputTypeSelectSchema: z.ZodType<Prisma.PaymentCountOutputTypeSelect> = z
	.object({
		bills: z.boolean().optional(),
	})
	.strict()

export default PaymentCountOutputTypeSelectSchema
