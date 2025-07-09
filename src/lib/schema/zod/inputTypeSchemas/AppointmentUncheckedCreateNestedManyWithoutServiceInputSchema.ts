import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyServiceInputEnvelopeSchema } from './AppointmentCreateManyServiceInputEnvelopeSchema'
import { AppointmentCreateOrConnectWithoutServiceInputSchema } from './AppointmentCreateOrConnectWithoutServiceInputSchema'
import { AppointmentCreateWithoutServiceInputSchema } from './AppointmentCreateWithoutServiceInputSchema'
import { AppointmentUncheckedCreateWithoutServiceInputSchema } from './AppointmentUncheckedCreateWithoutServiceInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutServiceInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutServiceInputSchema),
					z.lazy(() => AppointmentCreateWithoutServiceInputSchema).array(),
					z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema),
					z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => AppointmentWhereUniqueInputSchema),
					z.lazy(() => AppointmentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema
