import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateWithoutServiceInputSchema } from './AppointmentUncheckedUpdateWithoutServiceInputSchema'
import { AppointmentUpdateWithoutServiceInputSchema } from './AppointmentUpdateWithoutServiceInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateWithoutServiceInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutServiceInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema
