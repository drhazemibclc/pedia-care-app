import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateOrConnectWithoutBillsInputSchema } from './AppointmentCreateOrConnectWithoutBillsInputSchema'
import { AppointmentCreateWithoutBillsInputSchema } from './AppointmentCreateWithoutBillsInputSchema'
import { AppointmentUncheckedCreateWithoutBillsInputSchema } from './AppointmentUncheckedCreateWithoutBillsInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateNestedOneWithoutBillsInputSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutBillsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutBillsInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutBillsInputSchema).optional(),
			connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
		})
		.strict()

export default AppointmentCreateNestedOneWithoutBillsInputSchema
