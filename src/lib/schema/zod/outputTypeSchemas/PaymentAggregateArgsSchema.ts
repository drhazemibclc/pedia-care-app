import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentOrderByWithRelationInputSchema } from '../inputTypeSchemas/PaymentOrderByWithRelationInputSchema'
import { PaymentWhereInputSchema } from '../inputTypeSchemas/PaymentWhereInputSchema'
import { PaymentWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentWhereUniqueInputSchema'

export const PaymentAggregateArgsSchema: z.ZodType<Prisma.PaymentAggregateArgs> = z
	.object({
		where: PaymentWhereInputSchema.optional(),
		orderBy: z
			.union([PaymentOrderByWithRelationInputSchema.array(), PaymentOrderByWithRelationInputSchema])
			.optional(),
		cursor: PaymentWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PaymentAggregateArgsSchema
