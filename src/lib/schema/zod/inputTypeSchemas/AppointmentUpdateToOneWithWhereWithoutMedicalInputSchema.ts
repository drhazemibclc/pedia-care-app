import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateWithoutMedicalInputSchema } from './AppointmentUncheckedUpdateWithoutMedicalInputSchema'
import { AppointmentUpdateWithoutMedicalInputSchema } from './AppointmentUpdateWithoutMedicalInputSchema'
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'

export const AppointmentUpdateToOneWithWhereWithoutMedicalInputSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => AppointmentUpdateWithoutMedicalInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateToOneWithWhereWithoutMedicalInputSchema
