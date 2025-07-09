import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutPatientInputSchema } from './AppointmentCreateWithoutPatientInputSchema'
import { AppointmentUncheckedCreateWithoutPatientInputSchema } from './AppointmentUncheckedCreateWithoutPatientInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutPatientInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default AppointmentCreateOrConnectWithoutPatientInputSchema
