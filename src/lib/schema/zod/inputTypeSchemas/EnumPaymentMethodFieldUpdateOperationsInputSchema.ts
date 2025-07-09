import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentMethodSchema } from './PaymentMethodSchema'

export const EnumPaymentMethodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPaymentMethodFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => PaymentMethodSchema).optional(),
		})
		.strict()

export default EnumPaymentMethodFieldUpdateOperationsInputSchema
