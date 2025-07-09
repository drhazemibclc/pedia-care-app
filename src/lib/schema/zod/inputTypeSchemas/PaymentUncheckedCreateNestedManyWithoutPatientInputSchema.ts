import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateManyPatientInputEnvelopeSchema } from './PaymentCreateManyPatientInputEnvelopeSchema'
import { PaymentCreateOrConnectWithoutPatientInputSchema } from './PaymentCreateOrConnectWithoutPatientInputSchema'
import { PaymentCreateWithoutPatientInputSchema } from './PaymentCreateWithoutPatientInputSchema'
import { PaymentUncheckedCreateWithoutPatientInputSchema } from './PaymentUncheckedCreateWithoutPatientInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUncheckedCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutPatientInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PaymentCreateWithoutPatientInputSchema),
					z.lazy(() => PaymentCreateWithoutPatientInputSchema).array(),
					z.lazy(() => PaymentUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => PaymentUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PaymentCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => PaymentCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PaymentCreateManyPatientInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PaymentUncheckedCreateNestedManyWithoutPatientInputSchema
