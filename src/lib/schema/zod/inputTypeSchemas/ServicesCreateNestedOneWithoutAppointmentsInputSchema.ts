import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateOrConnectWithoutAppointmentsInputSchema } from './ServicesCreateOrConnectWithoutAppointmentsInputSchema'
import { ServicesCreateWithoutAppointmentsInputSchema } from './ServicesCreateWithoutAppointmentsInputSchema'
import { ServicesUncheckedCreateWithoutAppointmentsInputSchema } from './ServicesUncheckedCreateWithoutAppointmentsInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServicesCreateNestedOneWithoutAppointmentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ServicesCreateWithoutAppointmentsInputSchema),
					z.lazy(() => ServicesUncheckedCreateWithoutAppointmentsInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ServicesCreateOrConnectWithoutAppointmentsInputSchema)
				.optional(),
			connect: z.lazy(() => ServicesWhereUniqueInputSchema).optional(),
		})
		.strict()

export default ServicesCreateNestedOneWithoutAppointmentsInputSchema
