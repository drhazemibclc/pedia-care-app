import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutBillsInputSchema } from './AppointmentCreateWithoutBillsInputSchema'
import { AppointmentUncheckedCreateWithoutBillsInputSchema } from './AppointmentUncheckedCreateWithoutBillsInputSchema'
import { AppointmentUncheckedUpdateWithoutBillsInputSchema } from './AppointmentUncheckedUpdateWithoutBillsInputSchema'
import { AppointmentUpdateWithoutBillsInputSchema } from './AppointmentUpdateWithoutBillsInputSchema'
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'

export const AppointmentUpsertWithoutBillsInputSchema: z.ZodType<Prisma.AppointmentUpsertWithoutBillsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => AppointmentUpdateWithoutBillsInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutBillsInputSchema),
			]),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutBillsInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputSchema),
			]),
			where: z.lazy(() => AppointmentWhereInputSchema).optional(),
		})
		.strict()

export default AppointmentUpsertWithoutBillsInputSchema
