import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentIncludeSchema } from '../inputTypeSchemas/PaymentIncludeSchema'
import { PaymentSelectSchema } from '../inputTypeSchemas/PaymentSelectSchema'

export const PaymentArgsSchema: z.ZodType<Prisma.PaymentDefaultArgs> = z
	.object({
		select: z.lazy(() => PaymentSelectSchema).optional(),
		include: z.lazy(() => PaymentIncludeSchema).optional(),
	})
	.strict()

export default PaymentArgsSchema
