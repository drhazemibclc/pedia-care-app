import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateWithoutPaymentsInputSchema } from './PatientUncheckedUpdateWithoutPaymentsInputSchema'
import { PatientUpdateWithoutPaymentsInputSchema } from './PatientUpdateWithoutPaymentsInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutPaymentsInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => PatientUpdateWithoutPaymentsInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutPaymentsInputSchema),
			]),
		})
		.strict()

export default PatientUpdateToOneWithWhereWithoutPaymentsInputSchema
