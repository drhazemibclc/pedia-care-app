import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateOrConnectWithoutBillsInputSchema } from './PaymentCreateOrConnectWithoutBillsInputSchema'
import { PaymentCreateWithoutBillsInputSchema } from './PaymentCreateWithoutBillsInputSchema'
import { PaymentUncheckedCreateWithoutBillsInputSchema } from './PaymentUncheckedCreateWithoutBillsInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentCreateNestedOneWithoutBillsInputSchema: z.ZodType<Prisma.PaymentCreateNestedOneWithoutBillsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PaymentCreateWithoutBillsInputSchema),
					z.lazy(() => PaymentUncheckedCreateWithoutBillsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutBillsInputSchema).optional(),
			connect: z.lazy(() => PaymentWhereUniqueInputSchema).optional(),
		})
		.strict()

export default PaymentCreateNestedOneWithoutBillsInputSchema
