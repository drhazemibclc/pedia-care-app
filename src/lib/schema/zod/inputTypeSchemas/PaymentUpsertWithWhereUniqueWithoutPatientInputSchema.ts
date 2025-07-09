import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateWithoutPatientInputSchema } from './PaymentCreateWithoutPatientInputSchema'
import { PaymentUncheckedCreateWithoutPatientInputSchema } from './PaymentUncheckedCreateWithoutPatientInputSchema'
import { PaymentUncheckedUpdateWithoutPatientInputSchema } from './PaymentUncheckedUpdateWithoutPatientInputSchema'
import { PaymentUpdateWithoutPatientInputSchema } from './PaymentUpdateWithoutPatientInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PaymentWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PaymentUpdateWithoutPatientInputSchema),
				z.lazy(() => PaymentUncheckedUpdateWithoutPatientInputSchema),
			]),
			create: z.union([
				z.lazy(() => PaymentCreateWithoutPatientInputSchema),
				z.lazy(() => PaymentUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PaymentUpsertWithWhereUniqueWithoutPatientInputSchema
