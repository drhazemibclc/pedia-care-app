import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutDoctorInputSchema } from './AppointmentCreateWithoutDoctorInputSchema'
import { AppointmentUncheckedCreateWithoutDoctorInputSchema } from './AppointmentUncheckedCreateWithoutDoctorInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateOrConnectWithoutDoctorInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutDoctorInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default AppointmentCreateOrConnectWithoutDoctorInputSchema
