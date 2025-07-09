import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutPatientInputSchema } from './AppointmentCreateWithoutPatientInputSchema'
import { AppointmentUncheckedCreateWithoutPatientInputSchema } from './AppointmentUncheckedCreateWithoutPatientInputSchema'
import { AppointmentUncheckedUpdateWithoutPatientInputSchema } from './AppointmentUncheckedUpdateWithoutPatientInputSchema'
import { AppointmentUpdateWithoutPatientInputSchema } from './AppointmentUpdateWithoutPatientInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => AppointmentUpdateWithoutPatientInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutPatientInputSchema),
			]),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutPatientInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default AppointmentUpsertWithWhereUniqueWithoutPatientInputSchema
