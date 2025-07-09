import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateWithoutBillsInputSchema } from './AppointmentCreateWithoutBillsInputSchema'
import { AppointmentUncheckedCreateWithoutBillsInputSchema } from './AppointmentUncheckedCreateWithoutBillsInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateOrConnectWithoutBillsInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutBillsInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutBillsInputSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputSchema),
			]),
		})
		.strict()

export default AppointmentCreateOrConnectWithoutBillsInputSchema
