import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateManyPaymentInputEnvelopeSchema } from './PatientBillsCreateManyPaymentInputEnvelopeSchema'
import { PatientBillsCreateOrConnectWithoutPaymentInputSchema } from './PatientBillsCreateOrConnectWithoutPaymentInputSchema'
import { PatientBillsCreateWithoutPaymentInputSchema } from './PatientBillsCreateWithoutPaymentInputSchema'
import { PatientBillsUncheckedCreateWithoutPaymentInputSchema } from './PatientBillsUncheckedCreateWithoutPaymentInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsCreateNestedManyWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsCreateNestedManyWithoutPaymentInput> =
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
			createMany: z.lazy(() => PatientBillsCreateManyPaymentInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PatientBillsCreateNestedManyWithoutPaymentInputSchema
