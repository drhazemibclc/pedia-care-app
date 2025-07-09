import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutServiceInputSchema } from './AppointmentCreateWithoutServiceInputSchema'
import { AppointmentUncheckedCreateWithoutServiceInputSchema } from './AppointmentUncheckedCreateWithoutServiceInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutServiceInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),
			]),
		})
		.strict()

export default AppointmentCreateOrConnectWithoutServiceInputSchema
