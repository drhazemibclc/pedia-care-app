import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentWhereInputSchema } from './PaymentWhereInputSchema'

export const PaymentScalarRelationFilterSchema: z.ZodType<Prisma.PaymentScalarRelationFilter> = z
	.object({
		is: z.lazy(() => PaymentWhereInputSchema).optional(),
		isNot: z.lazy(() => PaymentWhereInputSchema).optional(),
	})
	.strict()

export default PaymentScalarRelationFilterSchema
