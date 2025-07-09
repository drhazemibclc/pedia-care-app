import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutAppointmentsInputSchema } from './DoctorCreateWithoutAppointmentsInputSchema'
import { DoctorUncheckedCreateWithoutAppointmentsInputSchema } from './DoctorUncheckedCreateWithoutAppointmentsInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutAppointmentsInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputSchema),
			]),
		})
		.strict()

export default DoctorCreateOrConnectWithoutAppointmentsInputSchema
