import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutDoctorInputSchema } from './AppointmentCreateWithoutDoctorInputSchema'
import { AppointmentUncheckedCreateWithoutDoctorInputSchema } from './AppointmentUncheckedCreateWithoutDoctorInputSchema'
import { AppointmentUncheckedUpdateWithoutDoctorInputSchema } from './AppointmentUncheckedUpdateWithoutDoctorInputSchema'
import { AppointmentUpdateWithoutDoctorInputSchema } from './AppointmentUpdateWithoutDoctorInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpsertWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => AppointmentUpdateWithoutDoctorInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutDoctorInputSchema),
			]),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutDoctorInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default AppointmentUpsertWithWhereUniqueWithoutDoctorInputSchema
