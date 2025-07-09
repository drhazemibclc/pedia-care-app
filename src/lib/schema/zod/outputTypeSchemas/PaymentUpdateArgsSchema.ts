import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentUncheckedUpdateInputSchema } from '../inputTypeSchemas/PaymentUncheckedUpdateInputSchema'
import { PaymentUpdateInputSchema } from '../inputTypeSchemas/PaymentUpdateInputSchema'
import { PaymentWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PaymentUpdateArgsSchema: z.ZodType<
	Omit<Prisma.PaymentUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PaymentUpdateInputSchema, PaymentUncheckedUpdateInputSchema]),
		where: PaymentWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PaymentUpdateArgsSchema
