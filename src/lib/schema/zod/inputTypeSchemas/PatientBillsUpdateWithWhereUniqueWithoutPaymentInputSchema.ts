import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsUncheckedUpdateWithoutPaymentInputSchema } from './PatientBillsUncheckedUpdateWithoutPaymentInputSchema'
import { PatientBillsUpdateWithoutPaymentInputSchema } from './PatientBillsUpdateWithoutPaymentInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsUpdateWithWhereUniqueWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsUpdateWithWhereUniqueWithoutPaymentInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PatientBillsUpdateWithoutPaymentInputSchema),
				z.lazy(() => PatientBillsUncheckedUpdateWithoutPaymentInputSchema),
			]),
		})
		.strict()

export default PatientBillsUpdateWithWhereUniqueWithoutPaymentInputSchema
