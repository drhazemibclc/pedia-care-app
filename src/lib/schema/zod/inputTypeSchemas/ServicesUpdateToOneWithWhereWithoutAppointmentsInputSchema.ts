import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesUncheckedUpdateWithoutAppointmentsInputSchema } from './ServicesUncheckedUpdateWithoutAppointmentsInputSchema'
import { ServicesUpdateWithoutAppointmentsInputSchema } from './ServicesUpdateWithoutAppointmentsInputSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => ServicesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ServicesUpdateWithoutAppointmentsInputSchema),
				z.lazy(() => ServicesUncheckedUpdateWithoutAppointmentsInputSchema),
			]),
		})
		.strict()

export default ServicesUpdateToOneWithWhereWithoutAppointmentsInputSchema
