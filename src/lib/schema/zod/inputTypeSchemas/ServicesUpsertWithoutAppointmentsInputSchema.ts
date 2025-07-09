import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateWithoutAppointmentsInputSchema } from './ServicesCreateWithoutAppointmentsInputSchema'
import { ServicesUncheckedCreateWithoutAppointmentsInputSchema } from './ServicesUncheckedCreateWithoutAppointmentsInputSchema'
import { ServicesUncheckedUpdateWithoutAppointmentsInputSchema } from './ServicesUncheckedUpdateWithoutAppointmentsInputSchema'
import { ServicesUpdateWithoutAppointmentsInputSchema } from './ServicesUpdateWithoutAppointmentsInputSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServicesUpsertWithoutAppointmentsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ServicesUpdateWithoutAppointmentsInputSchema),
				z.lazy(() => ServicesUncheckedUpdateWithoutAppointmentsInputSchema),
			]),
			create: z.union([
				z.lazy(() => ServicesCreateWithoutAppointmentsInputSchema),
				z.lazy(() => ServicesUncheckedCreateWithoutAppointmentsInputSchema),
			]),
			where: z.lazy(() => ServicesWhereInputSchema).optional(),
		})
		.strict()

export default ServicesUpsertWithoutAppointmentsInputSchema
