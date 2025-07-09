import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PaymentOrderByWithAggregationInputSchema'
import { PaymentScalarFieldEnumSchema } from '../inputTypeSchemas/PaymentScalarFieldEnumSchema'
import { PaymentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PaymentScalarWhereWithAggregatesInputSchema'
import { PaymentWhereInputSchema } from '../inputTypeSchemas/PaymentWhereInputSchema'

export const PaymentGroupByArgsSchema: z.ZodType<Prisma.PaymentGroupByArgs> = z
	.object({
		where: PaymentWhereInputSchema.optional(),
		orderBy: z
			.union([
				PaymentOrderByWithAggregationInputSchema.array(),
				PaymentOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: PaymentScalarFieldEnumSchema.array(),
		having: PaymentScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PaymentGroupByArgsSchema
