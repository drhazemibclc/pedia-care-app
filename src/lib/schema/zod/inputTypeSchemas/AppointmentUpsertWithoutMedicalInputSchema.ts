import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutMedicalInputSchema } from './AppointmentCreateWithoutMedicalInputSchema'
import { AppointmentUncheckedCreateWithoutMedicalInputSchema } from './AppointmentUncheckedCreateWithoutMedicalInputSchema'
import { AppointmentUncheckedUpdateWithoutMedicalInputSchema } from './AppointmentUncheckedUpdateWithoutMedicalInputSchema'
import { AppointmentUpdateWithoutMedicalInputSchema } from './AppointmentUpdateWithoutMedicalInputSchema'
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'

export const AppointmentUpsertWithoutMedicalInputSchema: z.ZodType<Prisma.AppointmentUpsertWithoutMedicalInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => AppointmentUpdateWithoutMedicalInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutMedicalInputSchema),
			]),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutMedicalInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputSchema),
			]),
			where: z.lazy(() => AppointmentWhereInputSchema).optional(),
		})
		.strict()

export default AppointmentUpsertWithoutMedicalInputSchema
