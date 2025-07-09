import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutServiceInputSchema } from './AppointmentCreateWithoutServiceInputSchema'
import { AppointmentUncheckedCreateWithoutServiceInputSchema } from './AppointmentUncheckedCreateWithoutServiceInputSchema'
import { AppointmentUncheckedUpdateWithoutServiceInputSchema } from './AppointmentUncheckedUpdateWithoutServiceInputSchema'
import { AppointmentUpdateWithoutServiceInputSchema } from './AppointmentUpdateWithoutServiceInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => AppointmentUpdateWithoutServiceInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutServiceInputSchema),
			]),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutServiceInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),
			]),
		})
		.strict()

export default AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema
