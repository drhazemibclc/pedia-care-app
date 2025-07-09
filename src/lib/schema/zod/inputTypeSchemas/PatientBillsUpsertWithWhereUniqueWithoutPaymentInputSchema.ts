import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateWithoutPaymentInputSchema } from './PatientBillsCreateWithoutPaymentInputSchema'
import { PatientBillsUncheckedCreateWithoutPaymentInputSchema } from './PatientBillsUncheckedCreateWithoutPaymentInputSchema'
import { PatientBillsUncheckedUpdateWithoutPaymentInputSchema } from './PatientBillsUncheckedUpdateWithoutPaymentInputSchema'
import { PatientBillsUpdateWithoutPaymentInputSchema } from './PatientBillsUpdateWithoutPaymentInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsUpsertWithWhereUniqueWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsUpsertWithWhereUniqueWithoutPaymentInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PatientBillsUpdateWithoutPaymentInputSchema),
				z.lazy(() => PatientBillsUncheckedUpdateWithoutPaymentInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientBillsCreateWithoutPaymentInputSchema),
				z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputSchema),
			]),
		})
		.strict()

export default PatientBillsUpsertWithWhereUniqueWithoutPaymentInputSchema
