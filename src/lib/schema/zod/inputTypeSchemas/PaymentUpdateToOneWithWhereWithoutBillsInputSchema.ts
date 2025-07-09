import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentUncheckedUpdateWithoutBillsInputSchema } from './PaymentUncheckedUpdateWithoutBillsInputSchema'
import { PaymentUpdateWithoutBillsInputSchema } from './PaymentUpdateWithoutBillsInputSchema'
import { PaymentWhereInputSchema } from './PaymentWhereInputSchema'

export const PaymentUpdateToOneWithWhereWithoutBillsInputSchema: z.ZodType<Prisma.PaymentUpdateToOneWithWhereWithoutBillsInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => PaymentUpdateWithoutBillsInputSchema),
				z.lazy(() => PaymentUncheckedUpdateWithoutBillsInputSchema),
			]),
		})
		.strict()

export default PaymentUpdateToOneWithWhereWithoutBillsInputSchema
