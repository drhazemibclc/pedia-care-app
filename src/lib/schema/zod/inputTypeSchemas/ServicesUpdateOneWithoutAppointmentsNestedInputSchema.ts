import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateOrConnectWithoutAppointmentsInputSchema } from './ServicesCreateOrConnectWithoutAppointmentsInputSchema'
import { ServicesCreateWithoutAppointmentsInputSchema } from './ServicesCreateWithoutAppointmentsInputSchema'
import { ServicesUncheckedCreateWithoutAppointmentsInputSchema } from './ServicesUncheckedCreateWithoutAppointmentsInputSchema'
import { ServicesUncheckedUpdateWithoutAppointmentsInputSchema } from './ServicesUncheckedUpdateWithoutAppointmentsInputSchema'
import { ServicesUpdateToOneWithWhereWithoutAppointmentsInputSchema } from './ServicesUpdateToOneWithWhereWithoutAppointmentsInputSchema'
import { ServicesUpdateWithoutAppointmentsInputSchema } from './ServicesUpdateWithoutAppointmentsInputSchema'
import { ServicesUpsertWithoutAppointmentsInputSchema } from './ServicesUpsertWithoutAppointmentsInputSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesUpdateOneWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.ServicesUpdateOneWithoutAppointmentsNestedInput> =
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
			upsert: z.lazy(() => ServicesUpsertWithoutAppointmentsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => ServicesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => ServicesWhereInputSchema)]).optional(),
			connect: z.lazy(() => ServicesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ServicesUpdateToOneWithWhereWithoutAppointmentsInputSchema),
					z.lazy(() => ServicesUpdateWithoutAppointmentsInputSchema),
					z.lazy(() => ServicesUncheckedUpdateWithoutAppointmentsInputSchema),
				])
				.optional(),
		})
		.strict()

export default ServicesUpdateOneWithoutAppointmentsNestedInputSchema
