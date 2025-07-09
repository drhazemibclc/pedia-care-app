import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PaymentFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.PaymentFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: PaymentWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PaymentFindUniqueArgsSchema
