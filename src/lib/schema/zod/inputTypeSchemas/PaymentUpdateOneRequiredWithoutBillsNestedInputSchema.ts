import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateOrConnectWithoutBillsInputSchema } from './PaymentCreateOrConnectWithoutBillsInputSchema'
import { PaymentCreateWithoutBillsInputSchema } from './PaymentCreateWithoutBillsInputSchema'
import { PaymentUncheckedCreateWithoutBillsInputSchema } from './PaymentUncheckedCreateWithoutBillsInputSchema'
import { PaymentUncheckedUpdateWithoutBillsInputSchema } from './PaymentUncheckedUpdateWithoutBillsInputSchema'
import { PaymentUpdateToOneWithWhereWithoutBillsInputSchema } from './PaymentUpdateToOneWithWhereWithoutBillsInputSchema'
import { PaymentUpdateWithoutBillsInputSchema } from './PaymentUpdateWithoutBillsInputSchema'
import { PaymentUpsertWithoutBillsInputSchema } from './PaymentUpsertWithoutBillsInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUpdateOneRequiredWithoutBillsNestedInputSchema: z.ZodType<Prisma.PaymentUpdateOneRequiredWithoutBillsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PaymentCreateWithoutBillsInputSchema),
					z.lazy(() => PaymentUncheckedCreateWithoutBillsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutBillsInputSchema).optional(),
			upsert: z.lazy(() => PaymentUpsertWithoutBillsInputSchema).optional(),
			connect: z.lazy(() => PaymentWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => PaymentUpdateToOneWithWhereWithoutBillsInputSchema),
					z.lazy(() => PaymentUpdateWithoutBillsInputSchema),
					z.lazy(() => PaymentUncheckedUpdateWithoutBillsInputSchema),
				])
				.optional(),
		})
		.strict()

export default PaymentUpdateOneRequiredWithoutBillsNestedInputSchema
