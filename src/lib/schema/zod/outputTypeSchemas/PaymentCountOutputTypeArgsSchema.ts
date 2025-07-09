import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCountOutputTypeSelectSchema } from './PaymentCountOutputTypeSelectSchema'

export const PaymentCountOutputTypeArgsSchema: z.ZodType<Prisma.PaymentCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => PaymentCountOutputTypeSelectSchema).nullish(),
		})
		.strict()

export default PaymentCountOutputTypeSelectSchema
