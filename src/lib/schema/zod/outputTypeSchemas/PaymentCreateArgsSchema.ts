import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateInputSchema } from '../inputTypeSchemas/PaymentCreateInputSchema'
import { PaymentUncheckedCreateInputSchema } from '../inputTypeSchemas/PaymentUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PaymentCreateArgsSchema: z.ZodType<
	Omit<Prisma.PaymentCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PaymentCreateInputSchema, PaymentUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PaymentCreateArgsSchema
