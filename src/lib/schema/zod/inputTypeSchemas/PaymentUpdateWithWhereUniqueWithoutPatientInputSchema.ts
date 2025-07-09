import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentUncheckedUpdateWithoutPatientInputSchema } from './PaymentUncheckedUpdateWithoutPatientInputSchema'
import { PaymentUpdateWithoutPatientInputSchema } from './PaymentUpdateWithoutPatientInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PaymentUpdateWithoutPatientInputSchema),
				z.lazy(() => PaymentUncheckedUpdateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PaymentUpdateWithWhereUniqueWithoutPatientInputSchema
