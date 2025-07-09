import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutMedicalInputSchema } from './AppointmentCreateWithoutMedicalInputSchema'
import { AppointmentUncheckedCreateWithoutMedicalInputSchema } from './AppointmentUncheckedCreateWithoutMedicalInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateOrConnectWithoutMedicalInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutMedicalInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default AppointmentCreateOrConnectWithoutMedicalInputSchema
