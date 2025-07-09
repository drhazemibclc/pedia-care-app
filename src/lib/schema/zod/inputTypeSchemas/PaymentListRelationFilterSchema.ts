import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentWhereInputSchema } from './PaymentWhereInputSchema'

export const PaymentListRelationFilterSchema: z.ZodType<Prisma.PaymentListRelationFilter> = z
	.object({
		every: z.lazy(() => PaymentWhereInputSchema).optional(),
		some: z.lazy(() => PaymentWhereInputSchema).optional(),
		none: z.lazy(() => PaymentWhereInputSchema).optional(),
	})
	.strict()

export default PaymentListRelationFilterSchema
