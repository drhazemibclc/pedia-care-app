import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateWithoutAppointmentsInputSchema } from './PatientUncheckedUpdateWithoutAppointmentsInputSchema'
import { PatientUpdateWithoutAppointmentsInputSchema } from './PatientUpdateWithoutAppointmentsInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => PatientUpdateWithoutAppointmentsInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputSchema),
			]),
		})
		.strict()

export default PatientUpdateToOneWithWhereWithoutAppointmentsInputSchema
