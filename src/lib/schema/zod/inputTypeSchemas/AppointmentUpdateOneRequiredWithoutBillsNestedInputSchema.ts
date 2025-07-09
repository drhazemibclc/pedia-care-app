import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateOrConnectWithoutBillsInputSchema } from './AppointmentCreateOrConnectWithoutBillsInputSchema'
import { AppointmentCreateWithoutBillsInputSchema } from './AppointmentCreateWithoutBillsInputSchema'
import { AppointmentUncheckedCreateWithoutBillsInputSchema } from './AppointmentUncheckedCreateWithoutBillsInputSchema'
import { AppointmentUncheckedUpdateWithoutBillsInputSchema } from './AppointmentUncheckedUpdateWithoutBillsInputSchema'
import { AppointmentUpdateToOneWithWhereWithoutBillsInputSchema } from './AppointmentUpdateToOneWithWhereWithoutBillsInputSchema'
import { AppointmentUpdateWithoutBillsInputSchema } from './AppointmentUpdateWithoutBillsInputSchema'
import { AppointmentUpsertWithoutBillsInputSchema } from './AppointmentUpsertWithoutBillsInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpdateOneRequiredWithoutBillsNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutBillsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutBillsInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutBillsInputSchema).optional(),
			upsert: z.lazy(() => AppointmentUpsertWithoutBillsInputSchema).optional(),
			connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => AppointmentUpdateToOneWithWhereWithoutBillsInputSchema),
					z.lazy(() => AppointmentUpdateWithoutBillsInputSchema),
					z.lazy(() => AppointmentUncheckedUpdateWithoutBillsInputSchema),
				])
				.optional(),
		})
		.strict()

export default AppointmentUpdateOneRequiredWithoutBillsNestedInputSchema
