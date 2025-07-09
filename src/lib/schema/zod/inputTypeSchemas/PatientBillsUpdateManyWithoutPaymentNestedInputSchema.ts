import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateManyPaymentInputEnvelopeSchema } from './PatientBillsCreateManyPaymentInputEnvelopeSchema'
import { PatientBillsCreateOrConnectWithoutPaymentInputSchema } from './PatientBillsCreateOrConnectWithoutPaymentInputSchema'
import { PatientBillsCreateWithoutPaymentInputSchema } from './PatientBillsCreateWithoutPaymentInputSchema'
import { PatientBillsScalarWhereInputSchema } from './PatientBillsScalarWhereInputSchema'
import { PatientBillsUncheckedCreateWithoutPaymentInputSchema } from './PatientBillsUncheckedCreateWithoutPaymentInputSchema'
import { PatientBillsUpdateManyWithWhereWithoutPaymentInputSchema } from './PatientBillsUpdateManyWithWhereWithoutPaymentInputSchema'
import { PatientBillsUpdateWithWhereUniqueWithoutPaymentInputSchema } from './PatientBillsUpdateWithWhereUniqueWithoutPaymentInputSchema'
import { PatientBillsUpsertWithWhereUniqueWithoutPaymentInputSchema } from './PatientBillsUpsertWithWhereUniqueWithoutPaymentInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsUpdateManyWithoutPaymentNestedInputSchema: z.ZodType<Prisma.PatientBillsUpdateManyWithoutPaymentNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientBillsCreateWithoutPaymentInputSchema),
					z.lazy(() => PatientBillsCreateWithoutPaymentInputSchema).array(),
					z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputSchema),
					z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PatientBillsCreateOrConnectWithoutPaymentInputSchema),
					z.lazy(() => PatientBillsCreateOrConnectWithoutPaymentInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutPaymentInputSchema),
					z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutPaymentInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PatientBillsCreateManyPaymentInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutPaymentInputSchema),
					z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutPaymentInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PatientBillsUpdateManyWithWhereWithoutPaymentInputSchema),
					z.lazy(() => PatientBillsUpdateManyWithWhereWithoutPaymentInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => PatientBillsScalarWhereInputSchema),
					z.lazy(() => PatientBillsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PatientBillsUpdateManyWithoutPaymentNestedInputSchema
