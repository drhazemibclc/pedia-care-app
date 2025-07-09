import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateWithoutPaymentInputSchema } from './PatientBillsCreateWithoutPaymentInputSchema'
import { PatientBillsUncheckedCreateWithoutPaymentInputSchema } from './PatientBillsUncheckedCreateWithoutPaymentInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsCreateOrConnectWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsCreateOrConnectWithoutPaymentInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientBillsCreateWithoutPaymentInputSchema),
				z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputSchema),
			]),
		})
		.strict()

export default PatientBillsCreateOrConnectWithoutPaymentInputSchema
