import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateWithoutBillsInputSchema } from './AppointmentUncheckedUpdateWithoutBillsInputSchema'
import { AppointmentUpdateWithoutBillsInputSchema } from './AppointmentUpdateWithoutBillsInputSchema'
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'

export const AppointmentUpdateToOneWithWhereWithoutBillsInputSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutBillsInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => AppointmentUpdateWithoutBillsInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutBillsInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateToOneWithWhereWithoutBillsInputSchema
