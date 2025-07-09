import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentOrderByWithRelationInputSchema } from '../inputTypeSchemas/PaymentOrderByWithRelationInputSchema'
import { PaymentScalarFieldEnumSchema } from '../inputTypeSchemas/PaymentScalarFieldEnumSchema'
import { PaymentWhereInputSchema } from '../inputTypeSchemas/PaymentWhereInputSchema'
import { PaymentWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PaymentFindFirstArgsSchema: z.ZodType<
	Omit<Prisma.PaymentFindFirstArgs, 'select' | 'include'>
> = z
	.object({
		where: PaymentWhereInputSchema.optional(),
		orderBy: z
			.union([PaymentOrderByWithRelationInputSchema.array(), PaymentOrderByWithRelationInputSchema])
			.optional(),
		cursor: PaymentWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PaymentFindFirstArgsSchema
