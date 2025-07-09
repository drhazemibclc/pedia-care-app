import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsUncheckedUpdateWithoutServiceInputSchema } from './PatientBillsUncheckedUpdateWithoutServiceInputSchema'
import { PatientBillsUpdateWithoutServiceInputSchema } from './PatientBillsUpdateWithoutServiceInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsUpdateWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsUpdateWithWhereUniqueWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PatientBillsUpdateWithoutServiceInputSchema),
				z.lazy(() => PatientBillsUncheckedUpdateWithoutServiceInputSchema),
			]),
		})
		.strict()

export default PatientBillsUpdateWithWhereUniqueWithoutServiceInputSchema
