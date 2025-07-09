import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentWhereInputSchema } from '../inputTypeSchemas/PaymentWhereInputSchema'

export const PaymentDeleteManyArgsSchema: z.ZodType<Prisma.PaymentDeleteManyArgs> = z
	.object({
		where: PaymentWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default PaymentDeleteManyArgsSchema
