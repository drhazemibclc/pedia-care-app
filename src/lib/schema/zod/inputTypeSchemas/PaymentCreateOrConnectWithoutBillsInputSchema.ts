import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateWithoutBillsInputSchema } from './PaymentCreateWithoutBillsInputSchema'
import { PaymentUncheckedCreateWithoutBillsInputSchema } from './PaymentUncheckedCreateWithoutBillsInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentCreateOrConnectWithoutBillsInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutBillsInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PaymentCreateWithoutBillsInputSchema),
				z.lazy(() => PaymentUncheckedCreateWithoutBillsInputSchema),
			]),
		})
		.strict()

export default PaymentCreateOrConnectWithoutBillsInputSchema
