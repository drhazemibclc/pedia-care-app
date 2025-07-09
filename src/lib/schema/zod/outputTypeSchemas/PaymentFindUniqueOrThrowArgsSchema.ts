import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PaymentFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.PaymentFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: PaymentWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PaymentFindUniqueOrThrowArgsSchema
