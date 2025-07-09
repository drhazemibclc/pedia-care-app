import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutPaymentsInputSchema } from './PatientCreateWithoutPaymentsInputSchema'
import { PatientUncheckedCreateWithoutPaymentsInputSchema } from './PatientUncheckedCreateWithoutPaymentsInputSchema'
import { PatientUncheckedUpdateWithoutPaymentsInputSchema } from './PatientUncheckedUpdateWithoutPaymentsInputSchema'
import { PatientUpdateWithoutPaymentsInputSchema } from './PatientUpdateWithoutPaymentsInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.PatientUpsertWithoutPaymentsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => PatientUpdateWithoutPaymentsInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutPaymentsInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientCreateWithoutPaymentsInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputSchema),
			]),
			where: z.lazy(() => PatientWhereInputSchema).optional(),
		})
		.strict()

export default PatientUpsertWithoutPaymentsInputSchema
