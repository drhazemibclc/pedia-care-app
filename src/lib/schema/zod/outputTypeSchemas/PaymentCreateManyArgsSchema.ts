import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateManyInputSchema } from '../inputTypeSchemas/PaymentCreateManyInputSchema'

export const PaymentCreateManyArgsSchema: z.ZodType<Prisma.PaymentCreateManyArgs> = z
	.object({
		data: z.union([PaymentCreateManyInputSchema, PaymentCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default PaymentCreateManyArgsSchema
