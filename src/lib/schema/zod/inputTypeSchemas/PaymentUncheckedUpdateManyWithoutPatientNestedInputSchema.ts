import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PaymentCreateManyPatientInputEnvelopeSchema } from './PaymentCreateManyPatientInputEnvelopeSchema'
import { PaymentCreateOrConnectWithoutPatientInputSchema } from './PaymentCreateOrConnectWithoutPatientInputSchema'
import { PaymentCreateWithoutPatientInputSchema } from './PaymentCreateWithoutPatientInputSchema'
import { PaymentScalarWhereInputSchema } from './PaymentScalarWhereInputSchema'
import { PaymentUncheckedCreateWithoutPatientInputSchema } from './PaymentUncheckedCreateWithoutPatientInputSchema'
import { PaymentUpdateManyWithWhereWithoutPatientInputSchema } from './PaymentUpdateManyWithWhereWithoutPatientInputSchema'
import { PaymentUpdateWithWhereUniqueWithoutPatientInputSchema } from './PaymentUpdateWithWhereUniqueWithoutPatientInputSchema'
import { PaymentUpsertWithWhereUniqueWithoutPatientInputSchema } from './PaymentUpsertWithWhereUniqueWithoutPatientInputSchema'
import { PaymentWhereUniqueInputSchema } from './PaymentWhereUniqueInputSchema'

export const PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutPatientNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PaymentCreateManyPatientInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => PaymentWhereUniqueInputSchema),
					z.lazy(() => PaymentWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PaymentUpdateManyWithWhereWithoutPatientInputSchema),
					z.lazy(() => PaymentUpdateManyWithWhereWithoutPatientInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => PaymentScalarWhereInputSchema),
					z.lazy(() => PaymentScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PaymentUncheckedUpdateManyWithoutPatientNestedInputSchema
