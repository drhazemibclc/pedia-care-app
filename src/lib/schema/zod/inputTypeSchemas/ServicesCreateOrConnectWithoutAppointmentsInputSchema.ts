import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateWithoutAppointmentsInputSchema } from './ServicesCreateWithoutAppointmentsInputSchema'
import { ServicesUncheckedCreateWithoutAppointmentsInputSchema } from './ServicesUncheckedCreateWithoutAppointmentsInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServicesCreateOrConnectWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => ServicesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ServicesCreateWithoutAppointmentsInputSchema),
				z.lazy(() => ServicesUncheckedCreateWithoutAppointmentsInputSchema),
			]),
		})
		.strict()

export default ServicesCreateOrConnectWithoutAppointmentsInputSchema
