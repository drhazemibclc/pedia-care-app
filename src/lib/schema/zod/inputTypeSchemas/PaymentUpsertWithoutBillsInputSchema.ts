import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateWithoutBillsInputSchema } from './PaymentCreateWithoutBillsInputSchema'
import { PaymentUncheckedCreateWithoutBillsInputSchema } from './PaymentUncheckedCreateWithoutBillsInputSchema'
import { PaymentUncheckedUpdateWithoutBillsInputSchema } from './PaymentUncheckedUpdateWithoutBillsInputSchema'
import { PaymentUpdateWithoutBillsInputSchema } from './PaymentUpdateWithoutBillsInputSchema'
import { PaymentWhereInputSchema } from './PaymentWhereInputSchema'

export const PaymentUpsertWithoutBillsInputSchema: z.ZodType<Prisma.PaymentUpsertWithoutBillsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => PaymentUpdateWithoutBillsInputSchema),
				z.lazy(() => PaymentUncheckedUpdateWithoutBillsInputSchema),
			]),
			create: z.union([
				z.lazy(() => PaymentCreateWithoutBillsInputSchema),
				z.lazy(() => PaymentUncheckedCreateWithoutBillsInputSchema),
			]),
			where: z.lazy(() => PaymentWhereInputSchema).optional(),
		})
		.strict()

export default PaymentUpsertWithoutBillsInputSchema
