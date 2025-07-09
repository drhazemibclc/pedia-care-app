import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutAppointmentsInputSchema } from './PatientCreateWithoutAppointmentsInputSchema'
import { PatientUncheckedCreateWithoutAppointmentsInputSchema } from './PatientUncheckedCreateWithoutAppointmentsInputSchema'
import { PatientUncheckedUpdateWithoutAppointmentsInputSchema } from './PatientUncheckedUpdateWithoutAppointmentsInputSchema'
import { PatientUpdateWithoutAppointmentsInputSchema } from './PatientUpdateWithoutAppointmentsInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientUpsertWithoutAppointmentsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => PatientUpdateWithoutAppointmentsInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientCreateWithoutAppointmentsInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputSchema),
			]),
			where: z.lazy(() => PatientWhereInputSchema).optional(),
		})
		.strict()

export default PatientUpsertWithoutAppointmentsInputSchema
