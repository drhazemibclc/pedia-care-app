import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutPaymentsInputSchema } from './PatientCreateWithoutPaymentsInputSchema'
import { PatientUncheckedCreateWithoutPaymentsInputSchema } from './PatientUncheckedCreateWithoutPaymentsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutPaymentsInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutPaymentsInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputSchema),
			]),
		})
		.strict()

export default PatientCreateOrConnectWithoutPaymentsInputSchema
