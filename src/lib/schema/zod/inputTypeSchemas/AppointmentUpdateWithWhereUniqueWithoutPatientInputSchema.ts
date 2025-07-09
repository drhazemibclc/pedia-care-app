import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateWithoutPatientInputSchema } from './AppointmentUncheckedUpdateWithoutPatientInputSchema'
import { AppointmentUpdateWithoutPatientInputSchema } from './AppointmentUpdateWithoutPatientInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateWithoutPatientInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateWithWhereUniqueWithoutPatientInputSchema
