import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentScalarWhereInputSchema } from './PaymentScalarWhereInputSchema'
import { PaymentUncheckedUpdateManyWithoutAppointmentInputSchema } from './PaymentUncheckedUpdateManyWithoutAppointmentInputSchema'
import { PaymentUpdateManyMutationInputSchema } from './PaymentUpdateManyMutationInputSchema'

export const PaymentUpdateManyWithWhereWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => PaymentScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PaymentUpdateManyMutationInputSchema),
				z.lazy(() => PaymentUncheckedUpdateManyWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default PaymentUpdateManyWithWhereWithoutAppointmentInputSchema
