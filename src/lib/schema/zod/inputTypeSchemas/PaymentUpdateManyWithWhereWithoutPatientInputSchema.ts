import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentScalarWhereInputSchema } from './PaymentScalarWhereInputSchema'
import { PaymentUncheckedUpdateManyWithoutPatientInputSchema } from './PaymentUncheckedUpdateManyWithoutPatientInputSchema'
import { PaymentUpdateManyMutationInputSchema } from './PaymentUpdateManyMutationInputSchema'

export const PaymentUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PaymentScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PaymentUpdateManyMutationInputSchema),
				z.lazy(() => PaymentUncheckedUpdateManyWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PaymentUpdateManyWithWhereWithoutPatientInputSchema
