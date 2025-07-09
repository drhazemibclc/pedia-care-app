import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateWithoutDoctorInputSchema } from './AppointmentUncheckedUpdateWithoutDoctorInputSchema'
import { AppointmentUpdateWithoutDoctorInputSchema } from './AppointmentUpdateWithoutDoctorInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpdateWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateWithoutDoctorInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateWithWhereUniqueWithoutDoctorInputSchema
