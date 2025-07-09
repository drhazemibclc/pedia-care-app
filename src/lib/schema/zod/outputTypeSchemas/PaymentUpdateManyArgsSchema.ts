import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PaymentUncheckedUpdateManyInputSchema'
import { PaymentUpdateManyMutationInputSchema } from '../inputTypeSchemas/PaymentUpdateManyMutationInputSchema'
import { PaymentWhereInputSchema } from '../inputTypeSchemas/PaymentWhereInputSchema'

export const PaymentUpdateManyArgsSchema: z.ZodType<Prisma.PaymentUpdateManyArgs> = z
	.object({
		data: z.union([PaymentUpdateManyMutationInputSchema, PaymentUncheckedUpdateManyInputSchema]),
		where: PaymentWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default PaymentUpdateManyArgsSchema
