import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateWithoutAppointmentsInputSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInputSchema'
import { DoctorUpdateWithoutAppointmentsInputSchema } from './DoctorUpdateWithoutAppointmentsInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => DoctorUpdateWithoutAppointmentsInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentsInputSchema),
			]),
		})
		.strict()

export default DoctorUpdateToOneWithWhereWithoutAppointmentsInputSchema
