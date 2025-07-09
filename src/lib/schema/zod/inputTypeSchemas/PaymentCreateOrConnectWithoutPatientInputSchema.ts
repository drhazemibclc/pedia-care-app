import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateWithoutPatientInputSchema } from './PaymentCreateWithoutPatientInputSchema'
import { PaymentUncheckedCreateWithoutPatientInputSchema } from './PaymentUncheckedCreateWithoutPatientInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PaymentCreateWithoutPatientInputSchema),
				z.lazy(() => PaymentUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PaymentCreateOrConnectWithoutPatientInputSchema
