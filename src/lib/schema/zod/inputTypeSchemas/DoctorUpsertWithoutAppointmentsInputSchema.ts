import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutAppointmentsInputSchema } from './DoctorCreateWithoutAppointmentsInputSchema'
import { DoctorUncheckedCreateWithoutAppointmentsInputSchema } from './DoctorUncheckedCreateWithoutAppointmentsInputSchema'
import { DoctorUncheckedUpdateWithoutAppointmentsInputSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInputSchema'
import { DoctorUpdateWithoutAppointmentsInputSchema } from './DoctorUpdateWithoutAppointmentsInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.DoctorUpsertWithoutAppointmentsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => DoctorUpdateWithoutAppointmentsInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentsInputSchema),
			]),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutAppointmentsInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputSchema),
			]),
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
		})
		.strict()

export default DoctorUpsertWithoutAppointmentsInputSchema
