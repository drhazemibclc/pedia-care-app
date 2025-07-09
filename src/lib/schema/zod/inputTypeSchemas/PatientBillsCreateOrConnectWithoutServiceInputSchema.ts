import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateWithoutServiceInputSchema } from './PatientBillsCreateWithoutServiceInputSchema'
import { PatientBillsUncheckedCreateWithoutServiceInputSchema } from './PatientBillsUncheckedCreateWithoutServiceInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsCreateOrConnectWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientBillsCreateWithoutServiceInputSchema),
				z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputSchema),
			]),
		})
		.strict()

export default PatientBillsCreateOrConnectWithoutServiceInputSchema
