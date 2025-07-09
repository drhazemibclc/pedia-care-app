import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateInputSchema } from '../inputTypeSchemas/PaymentCreateInputSchema'
import { PaymentUncheckedCreateInputSchema } from '../inputTypeSchemas/PaymentUncheckedCreateInputSchema'
import { PaymentUncheckedUpdateInputSchema } from '../inputTypeSchemas/PaymentUncheckedUpdateInputSchema'
import { PaymentUpdateInputSchema } from '../inputTypeSchemas/PaymentUpdateInputSchema'
import { PaymentWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PaymentUpsertArgsSchema: z.ZodType<
	Omit<Prisma.PaymentUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: PaymentWhereUniqueInputSchema,
		create: z.union([PaymentCreateInputSchema, PaymentUncheckedCreateInputSchema]),
		update: z.union([PaymentUpdateInputSchema, PaymentUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PaymentUpsertArgsSchema
