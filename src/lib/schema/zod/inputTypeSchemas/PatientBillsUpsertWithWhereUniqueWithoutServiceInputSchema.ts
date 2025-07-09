import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateWithoutServiceInputSchema } from './PatientBillsCreateWithoutServiceInputSchema'
import { PatientBillsUncheckedCreateWithoutServiceInputSchema } from './PatientBillsUncheckedCreateWithoutServiceInputSchema'
import { PatientBillsUncheckedUpdateWithoutServiceInputSchema } from './PatientBillsUncheckedUpdateWithoutServiceInputSchema'
import { PatientBillsUpdateWithoutServiceInputSchema } from './PatientBillsUpdateWithoutServiceInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsUpsertWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsUpsertWithWhereUniqueWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PatientBillsUpdateWithoutServiceInputSchema),
				z.lazy(() => PatientBillsUncheckedUpdateWithoutServiceInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientBillsCreateWithoutServiceInputSchema),
				z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputSchema),
			]),
		})
		.strict()

export default PatientBillsUpsertWithWhereUniqueWithoutServiceInputSchema
